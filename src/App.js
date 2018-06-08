import React, { Component } from 'react';
import './style.css';
import Block from './Block';

class App extends Component {

  count = 0;
  count1 = 0;
  conditon = false;

  counter= (data)=>{
    if(data===1)
    {this.count++;

    console.log('data '+data);
    console.log(this.count);  
    }
    if(data===2){
      this.count1++;

    console.log('data '+data);
    console.log(this.count1);  
    }

    let score = this.count1+this.count;
    score= 64-score;
   if(this.count>=8)
    alert(`You Won.... Your Score : ${score}
      Please Reload the Page
    `)
  
  }



 

  render() {
    return (
      <div className="App">
           <div id="container">
      <div>
        <div className="messages"></div>
        <table className="diamondsweeper-board">
          <tbody>
            <tr>
            <Block
             clicked={(data)=>{this.counter(data)}}
             />
             <Block
             clicked={this.counter}
            
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
            <tr>
            <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
            <tr>
            <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
            <tr>
            <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
            <tr>
            <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
            <tr>
            <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
            <tr>
            <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
            <tr>
            <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
              <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
             <Block
             clicked={this.counter}
             />
               <Block
             clicked={this.counter}
             />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </div>
    );
  }
}

export default App;
