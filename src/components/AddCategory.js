import { useState } from "react";
import React from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

const [inputValue, setInputValue] = useState("");

const handleInputChange = () =>{
    /* setInputValue(e.target.value);
    console.log(e);  */
    let val = document.querySelector("input").value;
    setInputValue(val);
};

const handleSubmit = (e) =>{
    e.preventDefault();

    if(inputValue.trim().length > 2){
        setCategorias(cats => [inputValue, ...cats]);
        setInputValue("");
    }
};

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input type = "text" value={inputValue} onChange={handleInputChange}/>
        </form>
    </div>
  );

}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
};
