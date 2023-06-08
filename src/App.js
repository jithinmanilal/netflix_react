import './App.css';
import React from 'react';
import {originals, action, comedy, horror, romance, documentaries} from './Urls'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card url={originals} title='Netflix Originals'/>
      <Card url={action} title='Action'/>
      <Card url={comedy} title='Comedy'/>
      <Card url={horror} title='Horror'/>
      <Card url={romance} title='Romance'/>
      <Card url={documentaries} title='Documentaries'/>
    </div>
  );
}

export default App;
