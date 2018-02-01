import React, { Component } from 'react';
import { walk }  from './dog.js'
class Content extends Component {

  constructor() {
    super();
    
    this.state = {
      data: [],
      message: "UnLike", // ประกาศข้อความใน state
      type: ""
    };

    this.changeMessage = this.changeMessage.bind(this); //ทำการ binding function
    this.insertData = this.insertData.bind(this);
  }

  changeMessage() {
    this.setState({ message: "Like" });
    
  }
  insertData() {
    walk()
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({ data: myArray });
  }
  onChange(event) {
    this.setState({ type: event.target.value })
  }
  
  render() {
    return (
      <div>
        <h3>FaceBook Libraryeiei</h3>
        <p>{this.props.title}</p>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>{this.state.message}</button><br />
        <h1>{this.state.data}</h1>
        <button onClick={this.insertData}>Insert</button><br /><br />
        <input type="text" onChange={this.onChange.bind(this)} />
        <h1>Welcome : {this.state.type}</h1>
        <h1><a href="/">Home</a></h1>
      </div>
    );

  }
}

export default Content;
