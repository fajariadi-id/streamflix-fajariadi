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
    if (wallet > price) return setWallet((prevWallet) => prevWallet - price);
    if (wallet < price) return alert('Not Enough Money!');
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar wallet={wallet} />

      <Switch>
        <Route path='/streamflix-fajariadi' exact>
          <Movies onBuy={purcasing} />
        </Route>

        <Route
          path='/streamflix-fajariadi/movie/:id-:title'
          render={(props) => <MovieInfo {...props} onBuy={purcasing} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
