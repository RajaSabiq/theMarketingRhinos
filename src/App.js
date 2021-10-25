import './App.css';
import NavBar from './Global/Components/NavBar/NavBar';
import Footer from './Screens/Home/Components/Footer/Footer';
import Home from './Screens/Home/Home';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
