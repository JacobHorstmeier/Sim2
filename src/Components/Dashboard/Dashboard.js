import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            houseList:[{}]
        }
    }


    getHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houseList: res.data
            })
        })
    }

    componentDidMount(){
        axios.get('/api/houses').then((res) => {
            this.setState({
                houseList: res.data
            })
        })
    }

    render() {
        console.log(this.houseList)
        let mapped = this.state.houseList.map((e,i) => {
            return (<div key={i}>
                <House 
                id={e.id}
                name={e.item}
                address={e.address}
                city={e.city}
                state={e.state}
                zip={e.zip}
                />
                
            </div> 
            )
        })
        return (
            <div>
                Dashboard
               {mapped}
                <Link to='/wizard'> <button >Add New Property</button> </Link>
               
                
            </div> 
        )
    }
}