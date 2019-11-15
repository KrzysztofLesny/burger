import React, { Component } from 'react';
import "./styles/Main.scss";
import Buttons from './Buttons';
import Builder from './Builder';

class Main extends Component {
    state = { 
        ingredients: [
            {
                id: 0,
                name: `avocado`
            },
            {
                id: 1,
                name: `bacon`
            },
            {
                id: 2,
                name: `bellPepper`
            },
            {
                id: 3,
                name: `cheese`
            },
            {
                id: 4,
                name: `egg`
            },
            {
                id: 5,
                name: `fish`
            },
            {
                id: 6,
                name: `lettuce`
            },
            {
                id: 7,
                name: `meat`
            },
            {
                id: 8,
                name: `onions`
            },
            {
                id: 9,
                name: `pickles`
            },
            {
                id: 10,
                name: `pineapple`
            },
            {
                id: 11,
                name: `salami`
            },
            {
                id: 12,
                name: `tomato`
            }
        ],
        id: 1,
        burger: [
            {
                id: 0,
                name: `bunBottom`
            }
            
        ]
    }

    addToBurger = (name) => {
        console.log(this.state.id);
        console.log(`kliknalem element ${name}`);
        const newEl = {
            id: this.state.id,
            name
        }
        this.setState((prevState) => ({
            id: prevState.id+1,
            burger: [...prevState.burger, newEl],
        }))
    }


    render() { 
        return ( 
            <div className="Main">
                <div className="Left">
                    <Buttons 
                        ingredients={this.state.ingredients}
                        addToBurger={this.addToBurger}
                    />
                </div>
                <div className="Right">
                    <Builder burger={this.state.burger}/>
                </div>
            </div>
         );
    }
}
 
export default Main;