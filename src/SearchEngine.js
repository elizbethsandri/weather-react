import React from "react";
import "./SearchEngine.css";


export default function SearchEngine() {

function handleSubmit(event) {
    event.preventDefault();
}
return <div className="SearchEngine">
    <form onSubmit={handleSubmit}>
    <div className="container">
    <div className="row">
        <div className="col-10">
        <span class="input-group mb-3">
        <input
        type="search" placeholder="search for a city"
        className="form-control" />
      <button type="submit" className="btn btn-outline-secondary">🔍</button>
      </span>
      </div>
      <div className="col-2 CurrentLocation">  
      <button className="btn btn-outline-secondary" type="button">current</button>  
      </div>
    </div>
    </div>
    </form>
</div>
 
}
 