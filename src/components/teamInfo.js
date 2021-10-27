import React from 'react'



class AllTeam extends React.Component {
  render() {
    const { shortName, crestUrl, venue, address, email, phone, founded} = this.props.team
    console.log("allteam",this.props);
    return (
      <div className="col-6 ">
        <div className="border border-1 mt-5">
          <h2>{shortName}</h2>
          <img src ={crestUrl}/>
          <p>{venue}</p>
          <p>{address}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{founded}</p>
        </div>
      </div>
    )
  }
}

export default AllTeam