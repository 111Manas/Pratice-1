import React,{Component} from 'react';
import './App.css';
import Navigation from './Floating/Navigation';
import Imagelink from './Floating/Imagelink';
import Rank from './Floating/Rank';
import Particles from 'react-particles-js';

const particlesoptions={
  particles: {
    number:{
      value:200,
      density:{
        enable:true,
        value_area:800
      }
      
    }
      }
    }

class App extends Component{
  render(){
  return (
    <div className="App">
        <Particles className='particles'
        params={particlesoptions}
         />
        <Navigation />
        <Rank />
        <Imagelink />
      
        {/*<Logo />
        
        <Facerecognise />*/}
    </div>
  );
}
}
export default App;
