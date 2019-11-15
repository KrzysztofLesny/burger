import React from 'react';

const Builder = ({burger}) => {
    console.log(burger);
    const WholeBurger = burger.map(item => {
        const imageUrl = require(`../img/${item.name}.png`)
        return (<div 
            key={item.id}
            className="Burger__Part"
            style={
                {
                    backgroundImage: `url(${imageUrl})`,
                    bottom: `${40*item.id}px`
                }  
            }
        >
        </div>
    )});
    return ( 
        <div className="Burger">
            {WholeBurger}
        </div>
    );
}
 
export default Builder;

