import React, { Component } from 'react';
import "./styles/OrderForm.scss";

const deliveryTimeOptions = () => {
    let arr = [];
    for (let i = 10; i < 21; i++) {
        for(let j=0; j<4; j++) {
            arr.push(i + ":" + (j===0 ? "00" : 15*j) );
        }
    }
    return arr;
};

class OrderFrom extends Component {
    state = {
        userFirstName: ``,
        userLastName:``,
        userEmail:``
    }

    

    render() {

        const timeOptions = deliveryTimeOptions();
        const selectOptions = timeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
        ));

        return ( 
            <div className="OrderFormContainer">
                <h1>ORDER FORM</h1>
                <form className="OrderForm">
                    <div className="OrderForm__Row">
                        <div className="FormElements">
                            <p>Payment method</p>
                            <label className="FormElements__Radio">
                                <input type="radio" name="paymentMethod" value="online"/> Online
                            </label>
                            <label className="FormElements__Radio">
                                <input type="radio" name="paymentMethod" value="card"/> Card (upon delivery)
                                </label>
                            <label className="FormElements__Radio">
                                <input type="radio" name="paymentMethod" value="cash"/> Cash
                            </label>
                        </div>

                        <div className="FormElements">
                            <p>Delivery method</p>
                            <label className="FormElements__Radio">
                                <input type="radio" name="deliveryMethod" value="online"/> Courier
                            </label>
                            <label className="FormElements__Radio">
                                <input type="radio" name="deliveryMethod" value="card"/> Takeaway
                                </label>
                            <label className="FormElements__Radio">
                                <input type="radio" name="deliveryMethod" value="cash"/> On site
                            </label>
                        </div>

                        <div className="FormElements">
                            <p>Delivery time</p>
                            <label className="FormElements__Radio">
                                <input type="radio" name="deliveryTime" value="asap"/> A.S.A.P.
                            </label>
                            <label className="FormElements__Radio">
                                <input type="radio" name="deliveryTime" value="future"/> Pick date/time
                                </label>
                            <input type="date" name="deliveryTimeDate" placeholder="Date"/> 
                            <select name="deliveryTimeOption">
                                    {selectOptions}
                            </select>
                        </div>
                    </div>

                    <div className="OrderForm__Row">
                        <input className="FormElements__Element FormElements__Element-wide" type="text" placeholder="City *" name="city"/>
                        <input  className="FormElements__Element" type="text" placeholder="Street *" name="street"/>
                        <input className="FormElements__Element FormElements__Element-right" type="text" placeholder="Number *" name="number"/>
                        <input className="FormElements__Element" type="text" placeholder="Appartment" name="appartment"/>
                        <input className="FormElements__Element FormElements__Element-right" type="text" placeholder="Floor" name="floor"/>
                    </div>

                    <div className="OrderForm__Row">
                        <input className="FormElements__Element" type="text" placeholder="First Name *" name="userFirstName"/>
                        <input className="FormElements__Element FormElements__Element-right" type="text" placeholder="Last Name *" name="userLastName"/>
                        <input className="FormElements__Element" type="email" placeholder="Email *" name="userEmail"/>
                        <input className="FormElements__Element FormElements__Element-right" type="tel" placeholder="Phone number *" name="userPhone" />


                        
                        <input className="FormElements__Element" type="password" placeholder="Password *" name="userPassword"/>
                        <input className="FormElements__Element" type="password" placeholder="Repeat Password *" name="userRepeatPassword"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default OrderFrom;