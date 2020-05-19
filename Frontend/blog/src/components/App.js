import React from 'react';
import BlogList from './Body';
import Header from '../components/Header'
import AuthenticatedHeader from './AuthenticatedHeader';
function App() {
  const token= sessionStorage.getItem("token") 
        let HideHeader = token ? <AuthenticatedHeader/> : <Header />
  return (
    
    <div className="App">
    
      <div>{HideHeader}</div> 
    <div><BlogList/></div>
    
    </div>
  );
}

export default App;
