import React, { useContext } from 'react';
import WalletsContext from '../../context/walletsContext';
import { useParams } from 'react-router-dom'; 
import TokenForm from '../tokenFormE/tokenFormE'; 
import Wallet from '../wallet/wallet';

const EditScreen = ({ history }) =>{

        const { wallets, setWallets } = useContext(WalletsContext);

        const { id } = useParams();

        const walletToEdit = wallets.find((wallet) => wallet.id === id);

        const handleOnSubmit = (wallet) => {
        const filteredWallets = wallets.filter((wallet) => wallet.id !== id);
        setWallets([wallet, ...filteredWallets]);
        history.push('/');
        };

        return(
            <TokenForm id={id} wallet={walletToEdit} handleOnSubmit={handleOnSubmit} />
        );
    }
export default EditScreen;