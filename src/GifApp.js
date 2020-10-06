import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';
export const GifApp = () => {
    const [categories, setCategories] = useState(['Samurai X']);
    // const handleAdd =() =>{
    //     setCategories([...categories, 'Ray']);
    //  }
     
    return (
        <>
        <h2> GifApp</h2>
        <AddCategory setCategories = {setCategories} />
        <hr></hr>
        {/* <button onClick={handleAdd}> Agregar </button> */}

     
        <ol>
        {
            categories.map(category=> 
                <GitGrid 
                key = { category }
                category = { category } />
            )
        }

        </ol>
        {

        }
            
        </>
    )
}
