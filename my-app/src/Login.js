import React, { Component } from 'react';
import manLogo from'./man.png';
import styled from 'styled-components';


const Button = styled.button`
  	border-radius: 2px;
  	padding: 1em 10em;
  	margin: 0 1em;
  	color: black;
  	border: 2px solid #e6b800;
  	font-weight: bold;
  	position: relative;
	display: inline-block;
	border-bottom: 4px solid #d6ac08;

`;

//-webkit-background-size: cover;
const Wrapper = styled.section`
   background: #80bfff;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   background-size: cover;
   width: 100vw;
   height: 100vh;
   text-align: center;
    position:fixed;
`;
const Wrapper1 = styled.section`
 padding: 4em;
 margin: 2em 20em;
 background: #f2f2f2;
 border-radius: 3px;
 position:fixed;
top:50%;
left:42%;
margin-left:-150px;
margin-top:-50px;
width:auto;
height:auto;


`;
const Input = styled.input`
 padding: 0.5em;
 margin: 0.5em;
 border: 2px ;
 border-radius: 3px;
  height: auto;
  
   
`;


const Picture = styled.section`
	position:fixed;
	top:20%;
	left:59%;
	margin-left:-100px;
	margin-top:-50px;
	width:auto;
	height:auto;
	vertical-align: middle;

`;
class Login extends Component{
	constructor(){
		super();
		this.state = {
			buttonColor: '#e6b800'
		};
		this.onButtonPress = this.onButtonPress.bind(this);
	}

	onButtonPress(){
		this.setState({buttonColor: '#c19b03'});
	}
 render(){

 return(

 	
		
		<Wrapper>
		<center><Picture><img src={manLogo}/></Picture></center>
		<Wrapper1>
		<center>
		<Input placeholder="Email" 
		 innerRef={x => { this.input = x }}
        onMouseEnter={() => this.input.focus()}  />
        </center>
        <center>
		<Input placeholder="Password" 
		 innerRef={y => { this.input = y }}
        onMouseEnter={() => this.input.focus()} type="password"/>
        </center>
		<center><Button style={{background: this.state.buttonColor ,border: this.state.buttonColor}} onClick={this.onButtonPress}>LOGIN</Button></center>
		</Wrapper1>
		

	</Wrapper>
		

 	);
 }




}
export default Login;