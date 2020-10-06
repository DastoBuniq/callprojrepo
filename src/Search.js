import React from 'react';
import './App.css';

function Search(props) {
    return (
        <div className="sRow">
            <i className="fas fa-search"></i>
          <input type="search" placeholder="Ricerca" className="searchBar"></input>
          <button className="infoBtn"
            style={{float: 'right'}}
            onClick={props.func}>
              {props.add ? <i className="fas fa-times"></i>  : <i className="fas fa-plus"></i>}
              </button>
        </div>
      );
}

export default Search;