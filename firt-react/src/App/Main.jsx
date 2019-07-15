import React from 'react';
import logo from '../logo.svg';
import TopNavBar from './Components/TopNavBar'
import Header from './Components/Header'
import Container from './Components/Container'
import AboutContainer from './Components/AboutContainer'
import Event from './Components/Event'
import ListCard from './Components/ListCard'

class Main extends React.Component{
constructor(props){
  super(props);  
  this.state ={
    isShowHeader : true,
    filter:""
  };

}

renderContent(){
  if(this.state.isShowHeader){
    return  <Header TextBox_Onchange ={(e)=>this.perubahanTexbox(e)} ></Header>
  }else {
    return <div></div>
  }
}

perubahanTexbox(e){
  console.log(e);
  this.setState({
    filter:e    
  })
}

filterTerakhir(){
  return this.state.filter;
}

gantiFlag(){
  if(this.state.isShowHeader == true)
    this.setState({isShowHeader:false})
    else 
    this.setState({isShowHeader:true})

}


  render() {
    return (
      <div >
          <TopNavBar TopNavBar_TestKlik={() => this.gantiFlag()}></TopNavBar>
          <div className="Isi">
            {this.renderContent()}
            <b>Next MeetUP</b>
            <Container></Container>
            <b>Member</b>
            <AboutContainer></AboutContainer>
            <b>Past Meetups</b>
            <ListCard filter={this.state.filter}></ListCard>
            
          </div>
         {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React1
          </a> 
        </header>*/}
      </div>
    );
  }
}



export default Main;
