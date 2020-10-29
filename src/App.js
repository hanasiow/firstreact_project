import React from 'react';
import './App.css';
import firebase from './Config';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const cardStyle ={
      width: 'auto',
      height: 'auto',
      backgroundColor: 'white',
      margin: 'auto',
      display: 'block',
      marginTop: '60px',
      opacity: 0.5,
      paddingTop: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderStyle: 'outset',
      borderLeft: '50px solid black',
      borderRadius: '20px'
    }
    return(
      <div>
        <Card style = {cardStyle}>
          <div className = "Buttons">
            <Link to = "/create">
              <button class= "Add-Button">Add Product</button>
            </Link>
          </div>

        </Card>
      </div>
    )
  }
}

export default App;
