import React from "react";
import AllTeam from "./components/teamInfo";
import teams from"./teams.json"
import Counter from "./components/counter"

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      count : 0,
      
    }
  }
  
  handlePlusClick = () =>{
    
    if(this.state.count === this.state.counte){
      this.setState({counte : this.state.counte +1})
    } else{
      this.setState({count : this.state.count +1})
    }
  }
  handleMoinClick = () =>{
    this.setState({count : this.state.count -1})
    if(this.state.count <= 0){
      this.setState({count : this.state.count })
    }
  }

 
  




  render(){
    console.log("resulta de team json",this.props);
    
    const teamFilter = teams.filter((team, index) => index < this.state.count)
    return(

      <div className="container">
        
        <h1 className="text-center">The Teams</h1>
          <Counter substract = {this.handleMoinClick} increment = {this.handlePlusClick}  count = {this.state.count} />
          
          <div className="row ">
            {teamFilter.map((team, index) => <AllTeam team = {index,team}/>)}
          </div>
      </div>
    )
  }
 
}
export default App;
