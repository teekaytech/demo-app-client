import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Budget from '../Budget';
import Commission from '../Commission';
import Login from '../Login';
import Revenue from '../Revenue';
import Dashboard from './Dashboard';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/revenue" component={Revenue} />
          <Route path="/budget" component={Budget} />
          <Route path="/setup" component={Commission} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
