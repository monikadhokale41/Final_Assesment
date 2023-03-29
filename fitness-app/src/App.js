import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ListTraineeComponent from './components/ListTraineeComponent'
import HeaderComponent from './components/HeaderComponent'
import CreateTraineeComponent from './components/CreateTraineeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path= "/"  exact component = {ListTraineeComponent}></Route>
                <Route path= "/trainee" component = {ListTraineeComponent}></Route>
                <Route path= "/add-trainee" component = {CreateTraineeComponent}></Route>
                {/* <ListTraineeComponent></ListTraineeComponent> */}
              </Switch>
            </div>
      </Router>
    </div>
  );
}

export default App;
