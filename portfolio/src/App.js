import { Route, Switch } from "react-router";
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Projects from './screens/Projects'
import "./App.css"
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        
      <Route exact path="/projects">
          <Projects />
        </Route>
        
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
