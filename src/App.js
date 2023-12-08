import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Layout from './components/Layout';


function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemList);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}

    </div>
  );
}

export default App;
