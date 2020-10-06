import React from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GitGrid = ({ category }) => {

    const  { data:images, loading } = useFetchGifs( category );

    return (
        <>
        <h3> {category} </h3>
        {loading &&  <span className="animate__animated animate__flash"> Cargando... </span>}
        <div className="card-grid">
            {
                images.map(img => (
                    <GifGridItem 
                    key = {img.id}
                    {...img} />
                ))
            }

        </div>
        </>
    )
}
