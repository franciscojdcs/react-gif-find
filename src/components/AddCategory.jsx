import React, { useState } from 'react'

export const AddCategory = ( {onNewCategory}) => {
    const [myInputValue, setMyInputValue] =useState('')

    const onInputChange = (event) => {
        setMyInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Para evitar un refrescamiento del navegador
        
        if (myInputValue.trim().length < 1) return;
        
        //onSetCategory(categ => [myInputValue, ...categ]); // esta es una props recibida
        onNewCategory(myInputValue.trim());

        setMyInputValue('');
    }

    return (
        <form onSubmit={(ev) => onSubmit(ev)}>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                value={myInputValue}
                onChange={ (eve) => onInputChange(eve) }
            />
        </form>
        
    )
}
