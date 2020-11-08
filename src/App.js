import { Route, Switch } from 'react-router-dom';
import Gallery from "./Gallery";
import Home from "./Home"

function App() {
  return (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Gallery" component={Gallery} />
      <Route render={() => <h1>404 Error not found!</h1>} />
    </Switch>
  </main>
  );
}

export default App;