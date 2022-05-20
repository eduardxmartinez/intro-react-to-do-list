import React from 'react';

function EmptySearch(props) {
    return (
        <p>No hay resultados para {props.text}</p>
    );
}

export { EmptySearch };