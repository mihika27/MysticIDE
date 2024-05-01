import logo from './logo.svg';
//lending components
import Home from './components/Home';
import './App.css';
import DataProvider from './context/DataProvider';


function App() {
  return (
    <DataProvider>
      <Home/> 
    </DataProvider>
    
  );
}

export default App;
