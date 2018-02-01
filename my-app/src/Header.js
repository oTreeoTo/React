import React, { Component } from 'react';
class Header extends Component{

constructor(){
	super();
	this.state={
		name:"Unlove",
		count:0
	};
}
 render(){
 	setTimeout(()=>{
 		this.setState({name:"Love"});
 		},2000);
 	setInterval(()=>{
 		this.setState({count:this.state.count+1});
 		},100);
	return(
      <div>
      <h1>มาลุ้นดูสิ</h1>
      <h2>{this.state.name}</h2>
      <h2>{this.state.count}</h2>
      <h1><a href="/">Home</a></h1>
      </div>
      );
    
  }
}
export default Header;