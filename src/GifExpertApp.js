import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = () =>{

    const [categorias, setCategorias] = useState(["Alf"]);


    return(

        <div>
            <h2> GifExpertApp </h2>
            <AddCategory setCategorias = {setCategorias}/>
            <hr></hr>

            <ol>
                {
                    categorias.map(category =>
                        <GifGrid 
                        categoria = {category}
                        key = {category}
                        />
                    )
                }
            </ol>

        </div>

    );     

};

export default GifExpertApp;



