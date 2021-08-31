import React from "react";

const TextInput = (props) => {
  return (
    <div style={{color : 'white',fontSize: '25px'}}>
      <label>{props.label}</label>
      <input
        type="number"
        style={{
            width: "10%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            boxSizing: "20px",
  
           
            outline: "2px",
  
            "&:hover": {
              border: "2px solid green"
            }
          }}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;
