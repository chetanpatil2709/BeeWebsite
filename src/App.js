import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './layout/Header';
import Home from './pages/homePage/Home';
// AOS Animation 
import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
