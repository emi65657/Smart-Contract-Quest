use starknet::ContractAddress;

// Deployment script for StarkQuest contracts
// This script deploys the main StarkQuest contract with optimized settings

#[starknet::interface]
trait IDeployment<TContractState> {
    fn deploy_starkquest(
        ref self: TContractState,
        token_contract: ContractAddress,
        nft_contract: ContractAddress
    ) -> ContractAddress;
}

#[starknet::contract]
mod Deployment {
    use super::IDeployment;
    use starknet::{ContractAddress, deploy_syscall, ClassHash};
    use starknet::class_hash::class_hash_const;

    #[storage]
    struct Storage {
        deployed_contracts: LegacyMap<felt252, ContractAddress>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        ContractDeployed: ContractDeployed,
    }

    #[derive(Drop, starknet::Event)]
    struct ContractDeployed {
        contract_address: ContractAddress,
        deployer: ContractAddress,
        contract_type: felt252,
    }

    #[abi(embed_v0)]
    impl DeploymentImpl of IDeployment<ContractState> {
        fn deploy_starkquest(
            ref self: ContractState,
            token_contract: ContractAddress,
            nft_contract: ContractAddress
        ) -> ContractAddress {
            // StarkQuest contract class hash (replace with actual hash after compilation)
            let class_hash: ClassHash = class_hash_const::<0x1234567890abcdef>();
            
            // Constructor arguments
            let mut constructor_calldata = ArrayTrait::new();
            constructor_calldata.append(token_contract.into());
            constructor_calldata.append(nft_contract.into());
            
            // Deploy with optimized settings for lower gas
            let (contract_address, _) = deploy_syscall(
                class_hash,
                0, // salt
                constructor_calldata.span(),
                false // deploy_from_zero
            ).unwrap();
            
            // Store deployed contract
            self.deployed_contracts.write('starkquest', contract_address);
            
            // Emit deployment event
            self.emit(ContractDeployed {
                contract_address,
                deployer: starknet::get_caller_address(),
                contract_type: 'starkquest',
            });
            
            contract_address
        }
    }
}
