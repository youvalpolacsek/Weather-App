import React, { Component } from 'react';
import {FaPlusCircle} from 'react-icons/fa'
import {FaMinusCircle} from 'react-icons/fa'
import {FaRedoAlt} from 'react-icons/fa'
import '../styles/city.css'

class City extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  saveCity = () => {
    this.props.saveCity(this.props.cityData)
  }

  deleteCity = () => {
  this.props.deleteCity(this.props.cityData.name)
  }

  updateCityData = () => {
    this.props.updateCityData(this.props.cityData.name)
  }

  render(){
    return(
      <div id="cityContainer">
      <div id="cityName">{this.props.cityData.name}</div>
      {/* <div id="time">{this.props.cityData.updatedAt}</div> */}
      <div id="tempContainer">
      <span id="condition">{this.props.cityData.condition}</span>
      <span id="temperature">{this.props.cityData.temperature} degrees</span>
      <img id="conditionPic" src={this.props.cityData.conditionPic}></img>
      </div>
      <div id="buttonContainer">
      <FaPlusCircle id="plusButton" onClick={this.saveCity}/>
      <FaMinusCircle id="minusButton" onClick={this.deleteCity}/>
      <FaRedoAlt id="refreshButton" onClick={this.updateCityData} />
      </div>
      </div>
    )
  }
}

export default City;
