import React from 'react';

class Form extends React.Component {
  state = {  } 
  render() { 
    return (
      <form className="row g-3 my-5">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-6">
    <label htmlFor="name" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="name"
      placeholder="Tushaar Jhamtani"
    />
  </div>
  <div className="col-3">
    <label htmlFor="roomno" className="form-label">
      Room number
    </label>
    <input
      type="text"
      className="form-control"
      id="roomno"
      placeholder="C-513"
    />
  </div>
  <div className="col-md-4">
    <label htmlFor="newsletter" className="form-label">
      Select Newsletter
    </label>
    <select id="newsletter" className="form-select">
      <option selected="">Choose...</option>
      <option>Sports</option>
      <option>Music</option>
      <option>Tech</option>
    </select>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        I hereby declare that all the information given by me here is true.
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">
      SUBMIT
    </button>
  </div>
</form>

    );
  }
}
 
export default Form;