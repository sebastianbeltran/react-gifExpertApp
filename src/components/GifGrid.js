import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    
    //const [images, setImages] = useState([]);
    const {data:images, loading} = useFecthGifs(categoria);
    
    return (
        <div>
            <h3 className='animate__animated animate__fadeInLeft'>{categoria}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            {<div className='card-grid'>
                {
                    images.map( img =>{
                        return <GifGridItem 
                        key = {img.id}
                        {...img}    
                        />
                })
                }
            </div>}

        </div>
        
    )
}
