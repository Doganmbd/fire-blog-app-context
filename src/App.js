import './App.css';

import AuthContextProvider from './context/AuthContext';

import Router from './router/Router';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router/>       
        
      </AuthContextProvider>

    </div>
    
  );
}

export default App;
