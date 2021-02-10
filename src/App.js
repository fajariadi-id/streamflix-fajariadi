import Movies from './components/Movies/Movies';
import { GlobalStyle } from './App.element';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieInfo from './components/Movies/MovieInfo/MovieInfo';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

const App = () => {
  const [wallet, setWallet] = useState(100.0);
  // const [owned, setOwned] = useState(false);

  const purcasing = (price) => {
    if (wallet > 10.0) return setWallet((prevWallet) => prevWallet - price);
    if (wallet < 10.0) return alert('Minimum balance must be Rp 10.000!');
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar wallet={wallet} />

      <Switch>
        <Route path='/' exact>
          <Movies onBuy={purcasing} />
        </Route>

        <Route
          path='/movie/:id-:title'
          render={(props) => <MovieInfo {...props} onBuy={purcasing} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
