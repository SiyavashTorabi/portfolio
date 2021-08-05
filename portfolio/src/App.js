import { Route, Switch } from "react-router";
import Navbar from './components/Navbar'
import Home from './screens/Home'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        
    
    </Switch>
    </div>
  );
}

export default App;
