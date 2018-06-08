import React , {Component} from 'react';



class Block extends Component{

    constructor(){
        super()
    this.state = {
        styleClasses : 'cell unknown',
        count : 1,
        clicked : false
       
      }

     

    }
    style1 = true;
    onClickHandler= ()=>{

        if(this.style1){
            this.style1=false;
            let styleClass= 'cell';
                if(Math.floor(Math.random()*10)>5){
                styleClass = 'cell diamond clicked';
                let count = this.state.count;
                count=0;
                this.props.clicked(1);
                let clicked = true
                this.setState({styleClasses:styleClass,count:count,clicked:clicked})
                return
                }
                else{
                console.log('clicked');
                this.props.clicked(2);
                this.setState({styleClasses:styleClass});   
          }
        }
        }
    
       

    render(){
       
    return  <td><div 
            className={this.state.styleClasses}
            onClick = {this.onClickHandler}
            
     ></div></td>

}
}


export default Block;