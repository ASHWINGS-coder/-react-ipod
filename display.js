import React from 'react';  // importing react dependencies
import Button from './button' // importing Button from button.js
// class component App
class App extends React.Component{
     constructor() {
        super()
        this.state = {
            count: 1,
            click:true
        }
    }
    // function to handel up counting
     handelUp =() => {
        this.setState(prevState => {
            const {count} = this.state;
            // if count is 4 set it to 1 else increase count 
         if(count == 4){
            this.setState(prevState => {
          return{
              count: prevState.count - 4
          }
        })
         }
            return {
                count: prevState.count + 1
            }
        })
    }
      // function to handel down counting
     handelDown =() => {
         const {count} = this.state;
          // if count is 1 set it to 1 else decrease count 
         if(count == 1){
            this.setState(prevState => {
          return{
              count: prevState.count + 4
          }
        })
         }
        this.setState(prevState => {
          return{
              count: prevState.count - 1 
          }
        })
    }
    // function to show menu if true or flase 
    handelClick = () =>{
        const {click} = this.state
        if(click){
           this.setState(prevState => {
          return{
              click: false
          }
        }) 
        }else{
            this.setState(prevState => {
          return{
              click: true
          }
        })
        }
    }
    render(){
    return(
        <div>
        <Button count={this.state.count}  click={this.state.click}/>
         <div className="Out">
            <button></button> 
            <button onClick={this.handelUp} >
            <img src="https://image.flaticon.com/icons/svg/892/892555.svg" className="arrow"/></button> 
            <button></button>
        <button>
        <img src="https://image.flaticon.com/icons/png/512/2413/2413625.png" className="arrow" />
        </button> 
        <button>
        <img src="https://image.flaticon.com/icons/svg/594/594314.svg" className="arrow" onClick={this.handelClick}/>
        </button> 
        <button> 
        <img src="https://image.flaticon.com/icons/png/512/2413/2413632.png" className="arrow"/>
        </button>
            <button></button> 
            <button onClick={this.handelDown} >
            <img src="https://image.flaticon.com/icons/svg/892/892498.svg" className="arrow"/></button>  
            <button></button>
        </div>
        </div>
    )
    }
}

export default  App;  // exporting App