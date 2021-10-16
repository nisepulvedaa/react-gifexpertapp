// import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {


    // useEffect(() => {
    //     getGifs(category)
    //     // .then(imgs => setImages(imgs))
    //     .then(setImages)
    // },[category]);

    const {data:images,loading} = useFetchGifs(category);
 
    // console.log(data);
    // console.log(loading);


    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading ? <p className="animate__animated animate__fadeIn">Cargando....</p> : <p className="animate__animated animate__fadeIn">Data cargada </p>}
       
        <div className="card-grid">
            <ol>
                {
                  images.map( img => 
                   
                    <GifGridItem
                     key={img.id}
                     {...img}
                    />
                 )
                } 
            </ol>
        </div> 
        </>
    );
}

export default GifGrid;