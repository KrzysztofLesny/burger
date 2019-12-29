import React, { Component } from 'react';
import "./styles/OrderForm.scss";
import OrderFormRadio from './OrderFormRadio';
import DateTimeSelect from './DateTimeSelect';


class OrderFrom extends Component {
    state = {
        today: `2019-12-16`,
        paymentMethod: ``,
        deliveryMethod: ``,
        deliveryTime: ``,
        deliveryTimeDate: ``,
        deliveryTimeOption: ``,
        userFirstName: ``,
        userLastName: ``,
        userEmail: ``,
        userPhone: ``,
        city: ``,
        street: ``,
        number: ``,
        appartment: ``,
        floor: ``,
        additonalInfo: ``,
        createAccount: false,
        termsAgree: false
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        console.log(`name to ${name}`);
        console.log(`type to ${type}`);
        if (type === "text" || type === "password" || type === "email" || type === "tel" || type === "radio" || type === "select-one" || type === "date") {
            const value = e.target.value;
            console.log(`value to ${value}`);
            this.setState({
                [name]: value
            })
        } else if (type === "checkbox") {
            const checked = e.target.checked;
            console.log(`checked to ${checked}`);
            this.setState({
                [name]: checked
            })
        }
      }

    render() {
        const {userFirstName, userLastName, userEmail, userPhone} = this.state;

        return (
            <div className="OrderFormContainer">
                <h1 className="OrderFormContainer__FormTitle">ORDER FORM</h1>
                <h1 className="OrderFormContainer__DetailsTitle">ORDER DETAILS</h1>
                <form className="OrderForm">
                    <div className="OrderForm__Row OrderForm__Row-wider">
                        <div className="FormElements">
                            <p className="FormElements__Title">Payment</p>
                            <OrderFormRadio
                                name={`paymentMethod`}
                                values={[`online`, `card`, `cash`]}
                                labels={[`Online`, `Card`, `Cash`]}
                                change={this.handleChange}
                            />
                        </div>

                        <div className="FormElements">
                            <p className="FormElements__Title">Delivery</p>
                            <OrderFormRadio
                                name={`deliveryMethod`}
                                values={[`courier`, `takeaway`, `onsite`]}
                                labels={[`Courier`, `Takeaway`, `On site`]}
                                change={this.handleChange}
                            />
                        </div>

                        <div className="FormElements">
                            <p className="FormElements__Title">Delivery time</p>
                            <OrderFormRadio
                                name={`deliveryTime`}
                                values={[`asap`, `future`]}
                                labels={[`A.S.A.P.`, `Pick date/time`]}
                                change={this.handleChange}
                            />

                            {/* only if future checked*/}
                            {this.state.deliveryTime !== "future" ? null : <DateTimeSelect change={this.handleChange}/>}
                        </div>
                    </div>
                    <div className="OrderForm__Border"></div>

                    <div className="OrderForm__Row">
                        <input className="FormElements__Element FormElements__Element-left" type="text" placeholder="First Name *" name="userFirstName" onChange={this.handleChange} value={userFirstName}/>
                        <input className="FormElements__Element FormElements__Element-right" type="text" placeholder="Last Name *" name="userLastName" onChange={this.handleChange} value={userLastName}/>
                        <input className="FormElements__Element FormElements__Element-left" type="email" placeholder="Email *" name="userEmail" onChange={this.handleChange} value={userEmail}/>
                        <input className="FormElements__Element FormElements__Element-right" type="tel" placeholder="Phone number *" name="userPhone" onChange={this.handleChange} value={userPhone}/>
                    </div>

                    {/* only if delivery by courier checked*/}
                    {this.state.deliveryMethod !== "courier" ? null : 
                    <div className="OrderForm__Row">
                        <input className="FormElements__Element FormElements__Element-left" type="text" placeholder="City *" name="city" onChange={this.handleChange}/>
                        <input  className="FormElements__Element FormElements__Element-left" type="text" placeholder="Street *" name="street" onChange={this.handleChange}/>
                        <input className="FormElements__Element FormElements__Element-right" type="text" placeholder="Number *" name="number" onChange={this.handleChange}/>
                        <input className="FormElements__Element FormElements__Element-left" type="text" placeholder="Appartment" name="appartment" onChange={this.handleChange}/>
                        <input className="FormElements__Element FormElements__Element-right" type="text" placeholder="Floor" name="floor" onChange={this.handleChange}/>

                        <textarea className="FormElements__TextAea" placeholder="Any addtional information." name="additonalInfo"></textarea>
                    </div>
                    }
                    <div className="OrderForm__Border"></div>

                    <div className="OrderForm__Row">
                        <label className="FormElements__LabelCheck">
                            <input type="checkbox" name="createAccount" onChange={this.handleChange}/>
                            <span className="FormElements__CheckBox"></span> 
                            I want to create an account.
                        </label>
                        
                        {this.state.createAccount === false ? null :
                            <>
                                <input className="FormElements__Element FormElements__Element-left" type="password" placeholder="Password *" name="userPassword"/>
                                <input className="FormElements__Element FormElements__Element-right" type="password" placeholder="Repeat Password *" name="userRepeatPassword"/>
                            </>
                        }
                        <label className="FormElements__LabelCheck">
                            <input type="checkbox" name="termsAgree" onChange={this.handleChange}/>
                            <span className="FormElements__CheckBox"></span> I agree to all terms.
                        </label>

                    </div>
                </form>
                <div className="OrderDetails">
                    <h3>Element OrderDetails</h3>
                    <p>burger 10zł</p>
                    <p>frytki 5zł</p>
                </div>
            </div>
        );
    }
}

export default OrderFrom;