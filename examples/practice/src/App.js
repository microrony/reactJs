import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './scss/style.scss'

function App() {
  return (
    <Router>
      <Switch>
      <Navbar />
        <Route>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
