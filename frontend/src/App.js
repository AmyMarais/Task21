// importing all components
import React from 'react';
import SearchBar from './components/Searchbar'
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='App' id='Home'>
      <header className='App-header'>
        <Header />
      </header>
      <main>
        <SearchBar />
        <hr/>
        <Favourites />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;