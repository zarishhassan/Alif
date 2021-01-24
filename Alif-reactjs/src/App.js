import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Genres from './components/pages/Genres';
import Browse from './components/pages/Browse';
import SignUp from './components/pages/SignUp';
import PDFViewer from './components/pages/PDFViewer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/genres' component={Genres} />
          <Route path='/browse' component={Browse} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/pdfViewer' component={PDFViewer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
