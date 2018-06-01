import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Wizard extends Component {
    constructor (){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick(){
        this.props.addAnswer(
            [
                this.state.name,
                this.state.address,
                this.state.city,
                this.state.state,
                this.state.zipcode,
            ]
        )
    }


    render() {
        console.log(this.props.history)
        return (
            <div>
                <div>
                    Property Name <br />
                    <input name='name' value={this.state.name} onChange={this.handleInput}/> <br />
                    Address <br />
                    <input name='address' value={this.state.address} onChange={this.handleInput}/> <br />
                    City 
                    State   
                    Zip <br />
                    <input name='city' value={this.state.city} onChange={this.handleInput} /> 
                    <input name='state' value={this.state.state} onChange={this.handleInput}/> 
                    <input type='number' name='Zip' value={this.state.zipcode}onChange={this.handleInput}/>


                
                
                </div> 

                this is the Wizard view
                <br />
               <Link to='/'> <button onClick={() => this.handleClick()}>Cancel</button></Link>
            </div> 
        )
    }
}