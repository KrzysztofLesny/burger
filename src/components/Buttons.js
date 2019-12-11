import React from 'react';

const Buttons = ({ingredients, addToBurger}) => {
    const buttons = ingredients.map(ingredient => (
        <button 
            key={ingredient.id}
            onClick={() => addToBurger(ingredient.url)}
            className="SideNav__Button"
        >
            {ingredient.name}
        </button>
    ));
    return ( 
        <div>
            <div className="SideNav__Buttons">
                {buttons}
            </div>
        </div>
    );
}
 
export default Buttons;