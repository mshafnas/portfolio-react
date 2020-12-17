import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import router with name as Router
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div class="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 app_main-content">
              <Navbar/>
              {/* use exact attribute show only the exactly matching component 
               otherwise it will render all the components when the '/' are matched*/}
              <Route exact path="/">
                <About/>
              </Route>

              <Route exact path="/resume">
                <Resume/>
              </Route>

              <Route exact path="/projects">
                <Projects/>
              </Route>

            </div>  
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
