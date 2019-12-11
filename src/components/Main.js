import React, { Component } from 'react';
import "./styles/Main.scss";
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import Builder from './Builder';

class Main extends Component {
    state = { 
        burgerFinished: false,
        ingredients: [
            {
                id: 0,
                url: `avocado`, 
                name: `Avocado`
            },
            {
                id: 1,
                url: `bacon`,
                name: `Bacon`
            },
            {
                id: 2,
                url: `bellPepper`,
                name: `Bell Pepper`
            },
            {
                id: 3,
                url: `cheese`,
                name: `Cheese`
            },
            {
                id: 4,
                url: `egg`,
                name: `Egg`
            },
            {
                id: 5,
                url: `fish`,
                name: `Fish`
            },
            {
                id: 6,
                url: `lettuce`,
                name: `Lettuce`
            },
            {
                id: 7,
                url: `meat`,
                name: `Meat`
            },
            {
                id: 8,
                url: `onions`,
                name: `Onions`
            },
            {
                id: 9,
                url: `pickles`,
                name: `Pickles`
            },
            {
                id: 10,
                url: `pineapple`,
                name: `Pineapple`

            },
            {
                id: 11,
                url: `salami`,
                name: `Salami`
            },
            {
                id: 12,
                url: `tomato`,
                name: `Tomato`
            },
        ],
        burger: [
            {
                id: 0,
                url: `bunBottom`
            }
            
        ]
    }

    addToBurger = (url) => {
        const newEl = {
            id: this.state.burger.length,
            url
        };
        const burgerFinished = url === `bunTop` ? true : false;
        this.setState((prevState) => ({
            burger: [...prevState.burger, newEl],
            burgerFinished
        }))
    }

    removeFromBurger = (id) => {
        const burger = this.state.burger.filter(item => item.id !== id);
        this.setState ({
            burger
        })
    }


    render() { 
        return ( 
            <div className="Main">
                <div className="SideNav">
                    <Buttons 
                        ingredients={this.state.ingredients}
                        addToBurger={this.addToBurger}
                    />
                    {!this.state.burgerFinished ?
                    <button 
                        className="SideNav__Button-Finish" 
                        onClick={() => this.addToBurger(`bunTop`)}
                    >
                        Finish
                    </button>
                    :
                    <Link to="/order">
                        <button className="SideNav__Button-Finish">
                            Order
                        </button>
                    </Link>
                    }
                </div>
                <div className="Right">
                    <Builder 
                        burger={this.state.burger}
                        removeFromBurger={this.removeFromBurger}
                    />
                </div>
            </div>
         );
    }
}
 
export default Main;