import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import login from './login';
import Navbar from './Navbar';

function App() {
  

  return (

    <BrowserRouter>
      <div className="grid-container">
        <Navbar />
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/login" component={login} />




          </div>

        </main>
        <footer className="footer">
          All right reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
