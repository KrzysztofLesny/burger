import React from 'react';

const Buttons = ({ingredients, addToBurger}) => {
    const buttons = ingredients.map(ingredient => (
        <button 
            key={ingredient.id}
            onClick={() => addToBurger(ingredient.url)}
            className={ingredient.id !== 13 ? 
                `SideNav__Button` 
                : 
                `SideNav__Button-Finish`
            }
        >
            {ingredient.name}
        </button>
    ));
    return ( 
        <div className="SideNav__Buttons">
            {buttons}
        </div>
    );
}
 
export default Buttons;