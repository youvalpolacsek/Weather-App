import React, { Component } from 'react';
import './App.css';
import Cities from './components/cities'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class App extends Component{
  constructor(){
    super()
    this.state={
      cities: [],
      cityName: "",
      cityData: [],
      savedCities: []
    }
  }


  handleChange = (e) => {
    this.setState({
      cityName: e.target.value
    })
  } 

  getCityData = async () => {
    let cityName = this.state.cityName
    let data = await axios.get(`http://localhost:5000/city/${cityName}`)
    // console.log(data.data)
    let newArr = [...this.state.cityData]
    newArr.push(data.data)
    this.setState({
      cityData: newArr
    })
    this.setState({
      cityName: ""
    })
  }

  updateCityData = async (cityName) => {
    let newData = await axios.get(`http://localhost:5000/city/${cityName}`)
    await axios.put(`http://localhost:5000/city/${cityName}`, newData.data)
    await this.getAllCities()

  }

  saveCity = (cityData) => {
    axios.post('http://localhost:5000/city', cityData)
  }

  deleteCity = async (cityName) => {
    await axios.delete(`http://localhost:5000/city/${cityName}`)
    await this.getAllCities()
  }

  getAllCities = async () => {
    let savedCities = await axios.get('http://localhost:5000/cities')
    this.setState({
      savedCities: savedCities.data
    })
  }

  componentDidMount = async () => {
    let savedCities = await axios.get('http://localhost:5000/cities')
    this.setState({
      savedCities: savedCities.data
    })
  }

  render(){
    return(
        <div id="appContainer">
          <div id="searchContainer">
          <div  id="header"></div>
        <TextField variant="outlined" id="searchInput" type="text" placeholder="City Name" value={this.state.cityName} onChange={this.handleChange}></TextField>
        <Button variant="contained" id="searchButton" onClick={this.getCityData}>search</Button>    
          </div>
          <div id="citiesContainer">
        <Cities cityData={this.state.cityData} savedCities={this.state.savedCities} deleteCity={this.deleteCity} saveCity={this.saveCity} updateCityData={this.updateCityData}/>
          </div>
        </div>
   
      
    )
  }
}

export default App;
