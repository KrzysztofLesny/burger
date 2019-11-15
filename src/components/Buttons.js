import React from 'react';

const Buttons = ({ingredients, addToBurger}) => {
    const buttons = ingredients.map(ingredient => (
        <button 
            key={ingredient.id}
            onClick={() => addToBurger(ingredient.name)}
            className='Left__Button'
        >
            {ingredient.name}
        </button>
    ));
    return ( 
        <div className="Buttons">
            {buttons}
        </div>
    );
}
 
export default Buttons;