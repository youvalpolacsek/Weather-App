import React, { Component } from 'react';
import City from './city';
import '../styles/cities.css'
class Cities extends Component{
  constructor(){
    super()
    this.state={

    }
  }


  render(){
    return(
        <div id="citiesContainer">
            {this.props.cityData.map(m=> <City key={m.name} cityData={m} deleteCity={this.props.deleteCity} saveCity={this.props.saveCity}/> )}
            {this.props.savedCities.map(m=> <City key={m.name} cityData={m} deleteCity={this.props.deleteCity} saveCity={this.props.saveCity} updateCityData={this.props.updateCityData}/> )}
        </div>
      
    )
  }
}

export default Cities;
