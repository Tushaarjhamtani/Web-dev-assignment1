import React from 'react';

class Reviews extends React.Component {
  state = {  } 
  render() { 
    return (<div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Tushaar Jhamtani</h5>
    <h6 className="card-subtitle mb-2 text-muted">Web developer</h6>
    <p className="card-text">
      heya wonderfulful webpage
    </p>
    <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a>
  </div>
</div>

);
  }
}
 
export default Reviews;