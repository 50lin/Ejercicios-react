import React from 'react';

function GaleriaImagenes(props) {
    const { imagenes } = props;

    return (
        <div>
            <h2>Galería de Imágenes</h2>
            {imagenes.map((imagen, index) => (
                <div key={index}>
                    <h3>{imagen.titulo}</h3>
                    <img src={imagen.url} alt={imagen.titulo} />
                </div>
            ))}
        </div>
    );
}

export default GaleriaImagenes;