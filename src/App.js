import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import Header from '../src/components/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Filter from './components/Filters';
import Sort from './components/Sort';
import Shopping from './components/Shopping';
import Cart from './components/Cart';
import axios from 'axios';
import Home from './components/Home';

function App() {
  // const [dataApi, setData] = useState[{}];
  useEffect(() =>{
    console.log('use Effect');
    axios.get( 'https://api.jsonbin.io/b/5f6b6cd665b18913fc51f71f' )
            .then( response => {
                console.log(response.data.items);
                const res = response.data.items;
                //const dataProduct = res.map(item => {<div> {item.name}</div>})
               // console.log(dataProduct);
            } )
            .catch( error => {
                console.log('error');
            } );

  })
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
