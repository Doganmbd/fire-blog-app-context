import './App.css';
import Navbar from './components/Navbar';
import AuthContextProvider from './context/AuthContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Dashboard />
      </AuthContextProvider>
    </div>
    
  );
}

export default App;
