import React from 'react';

const DateTimeSelect = ({change}) => {

    const deliveryTimeOptions = () => {
        let arr = [];
        for (let i = 10; i < 21; i++) {
            for(let j=0; j<4; j++) {
                arr.push(i + ":" + (j===0 ? "00" : 15*j) );
            }
        }
        return arr;
    };
    
    const timeOptions = deliveryTimeOptions();

    const selectOptions = timeOptions.map(option => (
        <option key={option} value={option}>{option}</option>
    ));


    return ( 
        <>
            <input type="date" className="FormElements__Date" name="deliveryTimeDate" onChange={change}/>
            <select className="FormElements__Date" name="deliveryTimeOption" onChange={change}>
                <option value="">Pick the time</option>
                {selectOptions}
            </select>
        </>
     );
}
 
export default DateTimeSelect;