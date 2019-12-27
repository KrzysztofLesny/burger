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
        today: `2019-12-16`,
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
                <h1 className="OrderFormContainer__Title">ORDER FORM</h1>
                <form className="OrderForm">
                    <div className="OrderForm__Row">
                        <div className="FormElements">
                            <p className="FormElements__Title">Payment method</p>
                            <label className="FormElements__Label">
                                <input type="radio" name="paymentMethod" value="online"/>
                                <span className="FormElements__Radio"></span> Online
                            </label>
                            <label className="FormElements__Label">
                                <input type="radio" name="paymentMethod" value="card"/><span className="FormElements__Radio"></span> Card (upon delivery)
                                </label>
                            <label className="FormElements__Label">
                                <input type="radio" name="paymentMethod" value="cash"/><span className="FormElements__Radio"></span>  Cash
                            </label>
                        </div>

                        <div className="FormElements">
                            <p className="FormElements__Title">Delivery method</p>
                            <label className="FormElements__Label">
                                <input type="radio" name="deliveryMethod" value="online"/><span className="FormElements__Radio"></span>  Courier
                            </label>
                            <label className="FormElements__Label">
                                <input type="radio" name="deliveryMethod" value="card"/><span className="FormElements__Radio"></span>  Takeaway
                                </label>
                            <label className="FormElements__Label">
                                <input type="radio" name="deliveryMethod" value="cash"/><span className="FormElements__Radio"></span>  On site
                            </label>
                        </div>

                        <div className="FormElements">
                            <p className="FormElements__Title">Delivery time</p>
                            <label className="FormElements__Label">
                                <input type="radio" name="deliveryTime" value="asap"/><span className="FormElements__Radio"></span>  A.S.A.P.
                            </label>
                            <label className="FormElements__Label">
                                <input type="radio" className="FormElements__Radio" name="deliveryTime" value="future"/><span className="FormElements__Radio"></span>  Pick date/time
                            </label>

                            {/* only if above checke*/}
                            <input type="date" className="FormElements__Date" name="deliveryTimeDate" />
                            <select className="FormElements__Date" className="FormElements__Date" name="deliveryTimeOption">
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

                        <textarea className="FormElements__TextAea" placeholder="Any addtional information."></textarea>
                    </div>
                    
                    <div className="OrderForm__Row">
                        <label className="FormElements__LabelCheck">
                            <input type="checkbox" name="passwordToggle"/>
                            <span className="FormElements__CheckBox"></span> 
                            I want to create an account.
                        </label>
                        

                        <input className="FormElements__Element" type="password" placeholder="Password *" name="userPassword"/>
                        <input className="FormElements__Element FormElements__Element-right" type="password" placeholder="Repeat Password *" name="userRepeatPassword"/>

                        <label className="FormElements__LabelCheck">
                            <input type="checkbox" name="termsAgree"/>
                            <span className="FormElements__CheckBox"></span> I agree to all terms.
                        </label>

                    </div>
                </form>
            </div>
        );
    }
}

export default OrderFrom;