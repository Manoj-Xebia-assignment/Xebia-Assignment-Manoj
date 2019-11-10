import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import LoginPage from './Component/LoginPage';
import DetailsPage from './Component/DetailsPage';
import Data from './Data/PlanetList.json';
import UserDetails from './Data/UserDetails.json';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleResetDetailsPage = this.toggleResetDetailsPage.bind(this);
    this.state = {
      isLoginShow: true,
      planetName: '',
      data: [],
      resetDetailsPage: true,
      modal: {
        userName: ''
      }
    };
  };
  
  handleFirstChange(event) {
    this.setState({
      modal: { userName: event.target.value }
    });
  }

  handleLogin(event) {
    for (let i = 0; i < UserDetails.data.length; i++) {
      if( this.state.modal.userName === UserDetails.data[i].name) {
        this.setState({
          isLoginShow: false
        });
      }
    }    
  }
  handleSearch(event) {
    let createData = [];
    for (let i = 0; i < Data.data.length; i++) {
      if (Data.data[i].name.includes(event.target.value) && event.target.value !== '') {
        createData.push(Data.data[i]);
      }
    }
    createData.sort((a, b) => a['population'].localeCompare(b['population']))
    this.setState({
      planetName: event.target.value,
      data: createData,
      resetDetailsPage: true
    });
  }

  toggleResetDetailsPage () {
    this.setState({
      resetDetailsPage: false
    });
  }

  handleLogout(event) {
    this.setState({
      isLoginShow: true
    });
  }
  render() {
    return (
      <div className="App" >
        <HeaderComponent />
        <LoginPage
          modal={this.state.modal}
          isLoginShow={this.state.isLoginShow}
          handleFirstChange={this.handleFirstChange}
          handleLogin={this.handleLogin} />
        <DetailsPage
          isLoginShow={this.state.isLoginShow}
          planetName={this.state.planetName}
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
          toggleResetDetailsPage={this.toggleResetDetailsPage}
          resetDetailsPage={this.state.resetDetailsPage}
          data={this.state.data} />
      </div>
    );
  }
}

export default App;
