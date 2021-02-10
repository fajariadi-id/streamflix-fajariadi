import Movies from './components/Movies/Movies';
import { GlobalStyle } from './App.element';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieInfo from './components/Movies/MovieInfo/MovieInfo';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <h1>App</h1>

      <Switch>
        <Route path='/' exact>
          <Movies />
        </Route>

        <Route path='/movie/:id-:title' component={MovieInfo} />
      </Switch>
    </Router>
  );
}

export default App;
