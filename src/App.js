import React, { Component } from 'react';
import Header from  './Header';
import Title from './Title'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'
import Ad from './Ad'
import OtherArticles from './OtherArticles'
import Footer from './Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <Title />
        
       <ArticleBody />

       <ArticleLinks />
      </div>

      <Ad />
      <OtherArticles />
    </main>
    <Footer />
      </div>
    );
  }
}

export default App;
