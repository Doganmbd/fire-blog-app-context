import './App.css';
import Navbar from './components/Navbar';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>

      <Navbar/>
      </AuthContextProvider>
    </div>
    
  );
}

export default App;
