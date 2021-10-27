import React from "react";
import AllTeam from "./components/teamInfo";
import teams from"./teams.json"


class App extends React.Component{
  render(){
    console.log("resulta de team json",this.props);
    return(
      <div className="container">
        <h1 className="text-center">The Teams</h1>
          <div className="row ">
            {teams.map(team => <AllTeam team ={team} />)}
          </div>
      </div>
    )
  }
 
}
export default App;
