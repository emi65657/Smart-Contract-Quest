use starknet::ContractAddress;

#[starknet::interface]
trait IStarkQuest<TContractState> {
    fn create_course(
        ref self: TContractState,
        title: felt252,
        description: felt252,
        reward_amount: u256
    ) -> u256;
    
    fn complete_course(ref self: TContractState, course_id: u256);
    
    fn mint_achievement_nft(
        ref self: TContractState,
        recipient: ContractAddress,
        achievement_type: felt252
    ) -> u256;
    
    fn get_user_tokens(self: @TContractState, user: ContractAddress) -> u256;
    
    fn get_course_info(self: @TContractState, course_id: u256) -> (felt252, felt252, u256, ContractAddress);
}

#[starknet::contract]
mod StarkQuest {
    use super::IStarkQuest;
    use starknet::{ContractAddress, get_caller_address};
    use openzeppelin::token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
    use openzeppelin::token::erc721::interface::{IERC721Dispatcher, IERC721DispatcherTrait};

    #[storage]
    struct Storage {
        // Course storage
        course_counter: u256,
        courses: LegacyMap<u256, Course>,
        
        // User progress
        user_tokens: LegacyMap<ContractAddress, u256>,
        user_completed_courses: LegacyMap<(ContractAddress, u256), bool>,
        
        // NFT storage
        nft_counter: u256,
        user_nfts: LegacyMap<ContractAddress, u256>,
        
        // Token contract address
        token_contract: ContractAddress,
        nft_contract: ContractAddress,
    }

    #[derive(Drop, Serde, starknet::Store)]
    struct Course {
        id: u256,
        title: felt252,
        description: felt252,
        creator: ContractAddress,
        reward_amount: u256,
        completion_count: u256,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        CourseCreated: CourseCreated,
        CourseCompleted: CourseCompleted,
        AchievementMinted: AchievementMinted,
        TokensRewarded: TokensRewarded,
    }

    #[derive(Drop, starknet::Event)]
    struct CourseCreated {
        course_id: u256,
        creator: ContractAddress,
        title: felt252,
        reward_amount: u256,
    }

    #[derive(Drop, starknet::Event)]
    struct CourseCompleted {
        course_id: u256,
        student: ContractAddress,
        tokens_earned: u256,
    }

    #[derive(Drop, starknet::Event)]
    struct AchievementMinted {
        nft_id: u256,
        recipient: ContractAddress,
        achievement_type: felt252,
    }

    #[derive(Drop, starknet::Event)]
    struct TokensRewarded {
        recipient: ContractAddress,
        amount: u256,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        token_contract: ContractAddress,
        nft_contract: ContractAddress
    ) {
        self.course_counter.write(0);
        self.nft_counter.write(0);
        self.token_contract.write(token_contract);
        self.nft_contract.write(nft_contract);
    }

    #[abi(embed_v0)]
    impl StarkQuestImpl of IStarkQuest<ContractState> {
        fn create_course(
            ref self: ContractState,
            title: felt252,
            description: felt252,
            reward_amount: u256
        ) -> u256 {
            let caller = get_caller_address();
            let course_id = self.course_counter.read() + 1;
            
            let course = Course {
                id: course_id,
                title,
                description,
                creator: caller,
                reward_amount,
                completion_count: 0,
            };
            
            self.courses.write(course_id, course);
            self.course_counter.write(course_id);
            
            self.emit(CourseCreated {
                course_id,
                creator: caller,
                title,
                reward_amount,
            });
            
            course_id
        }

        fn complete_course(ref self: ContractState, course_id: u256) {
            let caller = get_caller_address();
            
            // Check if course exists
            let course = self.courses.read(course_id);
            assert(course.id != 0, 'Course does not exist');
            
            // Check if user already completed this course
            let already_completed = self.user_completed_courses.read((caller, course_id));
            assert(!already_completed, 'Course already completed');
            
            // Mark course as completed
            self.user_completed_courses.write((caller, course_id), true);
            
            // Update course completion count
            let mut updated_course = course;
            updated_course.completion_count += 1;
            self.courses.write(course_id, updated_course);
            
            // Reward tokens
            let current_tokens = self.user_tokens.read(caller);
            self.user_tokens.write(caller, current_tokens + course.reward_amount);
            
            // Mint achievement NFT for certain milestones
            let user_nft_count = self.user_nfts.read(caller);
            if user_nft_count % 5 == 4 { // Every 5th course completion
                self.mint_achievement_nft(caller, 'milestone_achievement');
            }
            
            self.emit(CourseCompleted {
                course_id,
                student: caller,
                tokens_earned: course.reward_amount,
            });
            
            self.emit(TokensRewarded {
                recipient: caller,
                amount: course.reward_amount,
            });
        }

        fn mint_achievement_nft(
            ref self: ContractState,
            recipient: ContractAddress,
            achievement_type: felt252
        ) -> u256 {
            let nft_id = self.nft_counter.read() + 1;
            self.nft_counter.write(nft_id);
            
            // Update user NFT count
            let current_nft_count = self.user_nfts.read(recipient);
            self.user_nfts.write(recipient, current_nft_count + 1);
            
            self.emit(AchievementMinted {
                nft_id,
                recipient,
                achievement_type,
            });
            
            nft_id
        }

        fn get_user_tokens(self: @ContractState, user: ContractAddress) -> u256 {
            self.user_tokens.read(user)
        }

        fn get_course_info(self: @ContractState, course_id: u256) -> (felt252, felt252, u256, ContractAddress) {
            let course = self.courses.read(course_id);
            (course.title, course.description, course.reward_amount, course.creator)
        }
    }
}
