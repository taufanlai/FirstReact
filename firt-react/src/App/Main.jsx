import React from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import TopNavBar from './Components/TopNavBar'
import Header from './Components/Header'
import Container from './Components/Container'
import AboutContainer from './Components/AboutContainer'
import Event from './Components/Event'
import ListCard from './Components/ListCard2'

class Main extends React.Component{
constructor(props){
  super(props);  
  this.state ={
    isShowHeader : true,
    filter:"",
    sData:[],
    page:2,
    Prev:false,
    Next:false
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
  if(this.state.isShowHeader === true)
    this.setState({isShowHeader:false})
    else 
    this.setState({isShowHeader:true})

}

SwithPage(e){
  let newPage  =(this.state.page+e);
  
  this.setState({page :newPage,sData:[]},()=>this.fatching(this.state.page))
  console.log( newPage+ " pages");
//  this.fatching(newPage)

}

componentDidMount(){
  this.fatching(this.state.page);
  console.log("tesas");
}

fatching(page){
  let urlGet ='https://swapi.co/api/people/?page='+page
  console.log(urlGet);
  let opt ={
    method: 'GET',
    url: urlGet
  }

  axios(opt)
  .then(({data})=>{

    this.setState({sData :data.results})

    if(data.next === null)
      this.setState({Next :false})
    else
      this.setState({Next :true})


    if(data.previous === null)
      this.setState({Prev :false})
    else
      this.setState({Prev :true})
     
    console.log(this.state.sData);
  }).catch(error=>{
    console.log(error);
  })

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
            <ListCard 
              filter={this.state.filter} 
              json={this.state.sData}
              page={this.state.page}
              Prev={this.state.Prev}
              Next={this.state.Next}
              Switchpage ={(e)=>this.SwithPage(e)} >

            </ListCard>
          
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
