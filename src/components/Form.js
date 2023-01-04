import React, { useState } from 'react'
import './Form.css'

const Form = ({changeKeyword}) => {

  const handleChange = event => {
    changeKeyword(event.target.value)
  }

  return (
    
    <div className='sections'>
      <button className='buttons' type='button' value='us' onClick={handleChange} >U.S.</button>
      <button className='buttons' type='button' value='world' onClick={handleChange} >World</button>
      <button className='buttons' type='button' value='science' onClick={handleChange}>Science</button>
      <button className='buttons' type='button' value='business' onClick={handleChange}>Business</button>
      <button className='buttons' type='button' value='politics' onClick={handleChange}>Politics</button>
      <label className='selects' htmlFor="category"></label>
      <select name="category" id="category" onChange={handleChange} >
        <option value="">More Categories</option>
        <option value="arts" onClick={handleChange}>Arts</option>
        <option value="automobiles" onClick={handleChange}>Automobiles</option>
        <option value="books" onClick={handleChange}>Books</option>
        <option value="business" onClick={handleChange}>Business</option>
        <option value="fashion" onClick={handleChange}>Fashion</option>
        <option value="food" onClick={handleChange}>Food</option>
        <option value="health" onClick={handleChange}>Health</option>
        <option value="insider" onClick={handleChange}>Insider</option>
        <option value="movies" onClick={handleChange}>Movies</option>
        <option value="obituaries" onClick={handleChange}>Obituaries</option>
        <option value="opinion" onClick={handleChange}>Opinion</option>
        <option value="politics" onClick={handleChange}>Politics</option>
        <option value="realestate" onClick={handleChange}>Real Estate</option>
        <option value="science" onClick={handleChange}>Science</option>
        <option value="sports" onClick={handleChange}>Sports</option>
        <option value="sundayreview" onClick={handleChange}>Sunday Review</option>
        <option value="technology" onClick={handleChange}>Technology</option>
        <option value="theater" onClick={handleChange}>Theater</option>
        <option value="t-magazine" onClick={handleChange}>Times Magazine</option>
        <option value="travel" onClick={handleChange}>Travel</option>
        <option value="upshot" onClick={handleChange}>Upshot</option>
        <option value="us" onClick={handleChange}>U.S.</option>
        <option value="world" onClick={handleChange}>World</option>
      </select>
    </div>
  )
}

export default Form
