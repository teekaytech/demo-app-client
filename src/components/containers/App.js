import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
