import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title = "Welcome to new Blog"
  const likes = 50;
  const link = "http://www.google.com"

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{100}</p>
        <p>
          {"Hello People"}
        </p>
        <p>{Math.random()*50}</p>
        <a href={link}>Google Website</a>
      </div>
    </div>
    </Router>
  );
}

export default App;
