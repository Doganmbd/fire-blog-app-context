import './App.css';

import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';

import Router from './router/Router';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <Router/>       
        </BlogContextProvider>
      </AuthContextProvider>

    </div>
    
  );
}

export default App;
