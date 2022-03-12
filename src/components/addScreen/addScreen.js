import React, { useContext } from 'react';
import WalletsContext from '../../context/walletsContext';
import TokenForm from '../tokenForm/tokenForm';


const AddScreen = ({ history }) =>{
        const { wallets, setWallets } = useContext(WalletsContext);

        const handleOnSubmit = (wallet) => {
            setWallets([wallet, ...wallets]);
            history.push('/');
        };

        return(
            <React.Fragment>
                <TokenForm handleOnSubmit={handleOnSubmit} />
            </React.Fragment>
        );
    }
export default AddScreen;