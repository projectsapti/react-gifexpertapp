import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');

  const handleInputchange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((cate) => [inputValue,...cate]);
    setinputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input value={inputValue} onChange={handleInputchange} type="text" />
    </form>
  );
};
