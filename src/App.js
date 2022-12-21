import logo from './logo.svg';
import './assets/css/app.min.css';
import './assets/css/icons.min.css';
import './assets/css/bootstrap.min.css';
import Header from './Header';
import Menu_Left from './Header/header-left';
import RouterMenu from './Router';
import Footer from './footer';
import RouterForm from './RouterForm';

function App() {
  return (
    <div className="App">
      <RouterForm />
      {/* <RouterMenu /> */}
    </div>
  );
}

export default App;
