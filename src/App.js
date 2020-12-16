import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import components
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <Sidebar/>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 app_main-content">
            <h5>Side here</h5>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;
