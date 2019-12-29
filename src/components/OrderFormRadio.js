import React from 'react';

const OrderFormRadio = ({name, values, labels, change}) => {

    const radios = values.map((value, i) => (
        <label key={value} className="FormElements__Label">
            <input type="radio" name={name} value={value} onChange={change}/>
            <span className="FormElements__Radio"></span>{labels[i]}
        </label>
    ));
    return ( 
        <>
            {radios}
        </>
     );
}
 
export default OrderFormRadio;