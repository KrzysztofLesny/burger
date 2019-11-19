import React from 'react';
import close from '../img/close.png'

const Builder = ({burger, removeFromBurger}) => {
    console.log(burger)
    const WholeBurger = burger.map(item => {
        const imageUrl = require(`../img/${item.url}.png`)
        return (
            <div 
                key={item.id}
                className="Burger__Part"
                style={
                    {
                        backgroundImage: `url(${imageUrl})`,
                        bottom: `${40*item.id}px`
                    }  
                }
            >
                {burger.length-1 === item.id && 
                    item.id !== 0 &&
                    item.url !== `bunTop` && 
                    <img 
                        src={close} 
                        alt="close button"
                        className="Burger__Close"
                        onClick={() => removeFromBurger(item.id)}
                    /> 
                }
            </div>
        )
    });
    return ( 
        <div className="Burger">
            {WholeBurger}
        </div>
    );
}
 
export default Builder;

