import HomeScreen from './components/homeScreen/homeScreen';
import AddScreen from './components/addScreen/addScreen';
import EditScreen  from './components/editScreen/editScreen';
import useLocalStorage from './hooks/useLocalStorage';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WalletsContext from './context/walletsContext';
import './App.css';

const App = () => {

  const [wallets, setWallets] =  useLocalStorage('wallets', []);

  return (
    <BrowserRouter>
      <div className="main-content">
        <WalletsContext.Provider value={{ wallets, setWallets }}>
          <Switch>
              <Route component={HomeScreen} exact path="/"  />
              <Route component={AddScreen}  path="/add"  />
              <Route component={EditScreen} path="/edit/:id"  />
          </Switch>
        </WalletsContext.Provider>
      </div>  
    </BrowserRouter>
  );
}

export default App;
