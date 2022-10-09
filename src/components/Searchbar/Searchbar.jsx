import React from 'react';
import { useState } from 'react';
import styles from "components/Searchbar/Searchbar.module.css"

const {searchbar, form, button, button_label, input} = styles

export const Searchbar = ( {onSubmit} ) => {
  const [newValue, setNewValue] = useState('');

  const handleChange = e => {
    const {value} = e.target;
    setNewValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(newValue);
    setNewValue('');
  }

    return (
        <header className={searchbar}>
        <form className={form} onSubmit={handleSubmit}>
          <button type="submit" className={button}>
            <span className={button_label}>Search</span>
          </button>
      
          <input
            className={input}
            type="text"
            name="searchedValue"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={newValue}
            onChange={handleChange}
          />
        </form>
      </header>
    )
  
}

export default Searchbar