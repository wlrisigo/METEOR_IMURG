// --------------- ROOT COMPONENT ______________
// Import the react lib
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList';
import axios from 'axios';



//Create a component
class App extends Component{
  //automatically called with props object that is passed up by component
  //to component
constructor(props){
  //parent constructor called by super props
  super(props);
//Purpose : to initalize state object
// state object- somthing that belongs to every react component
// can have multiple prperties this one just has images
  this.state = { images: [] };
}
//whatever is inside of render will be placed on the screen
componentWillMount() {
  let url = "https://api.imgur.com/3/gallery/hot/viral/0";
  /* need to forcably rerender because once cWM called render be called
  before data is pulled --  SO WE HAVE TO INSTANCIATE STATE */
  axios.get(url, { headers: {'Authorization': ' Client-ID b79fe4199fccb0a'}})
  //setting the state object to be data of API
  //setState is the ONLY way to MODIFY a COMPONENT in react
    .then(response =>  this.setState ({ images: response.data.data }));
  }

  render(){
  //When ever app gets rendered, render ImageList
  return(
    <div>
      <ImageList images = {this.state.images}/>
    </div>
  );
};
};
//nessicary in order to wait for containter to be created
//Before querying container
Meteor.startup(() => {
  // Render this component to the screen
ReactDOM.render(<App />, document.querySelector(".container"));
});
