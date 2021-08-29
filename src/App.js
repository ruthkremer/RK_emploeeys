import './App.css';
import {
  BrowserRouter as Router,
  Switch,Route
} from "react-router-dom";
import Employees from './componnents/employees';
import Payments from './componnents/payments';
import { Wrapper } from './componnents/ui'

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/payments">
            <Payments />
          </Route>
         
          <Route path="/">
            <Employees />
          </Route>
        </Switch>
      </Router>
    </Wrapper >
  );
}

export default App;
