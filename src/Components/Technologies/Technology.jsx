  import React from "react";
  import "./technology.css"
  const Technology = (props) => {
    return (
      <>

      <div className="technology">
        <i className={props.link}></i>
        <h1>{props.title}</h1>
        <p>Experience with {props.title}</p>
      </div>
      </>
    );
  };

  export default Technology;
