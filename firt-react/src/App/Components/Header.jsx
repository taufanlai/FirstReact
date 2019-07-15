import React from 'react';

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      counter:0,
      imgUrl :"https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202019/Magazine/04April/CR-Cars-InlineHero-ComingSoon-Toyota-Supra-2-19", 
      imgurl2 :"https://st.motortrend.com/uploads/sites/10/2017/11/2017-toyota-86-at-coupe-angular-front.png?interpolation=lanczos-none&fit=around|660:660",
      imgUrlt :""

    }  
  }

  tambah(){
    let total  = this.state.counter;
    if(total < 5){
      this.setState({counter:total+1});
    }
  }



  imgUrl(){

    return this.state.imgUrlt;

  }

  loopUrl(){
    
    setInterval(() => {
       if(this.state.imgUrlt === this.state.imgUrl)
          this.setState({
            imgUrlt : this.state.imgurl2
          })
          else 
          this.setState({
            imgUrlt : this.state.imgUrl
          })       
          
    }, 1000);

  }

  componentDidMount (){
    this.loopUrl();
  }

  hasilTaufan(){
    if(this.state.counter >=5){
      return <div> dah cukup </div>
    }
    else {
        return <div>totalklik {this.state.counter}</div>

    }


  }

  render() {
    return (
      <div >
        <div className ='Header'>
            <div class="Foto">
                <img src={this.imgUrl()} height="150px" width = "150px">
                </img>
            </div>
            <div class="Properties">
                <div><b>Hacktiv8 meetup</b></div>
                <div class ="Header-Poperties-isi2">
                  <div class = "Header-Properties-lbl">
                      <div>Location </div> 
                      <div>Member </div>
                      <div>Organizer </div>
                    </div>
                    <div class = "Header-Properties-Isi">
                      <div>Jakarta, indonesia </div> 
                      <div>1.076 </div>
                      <div>adhy wiranata {this.hasilTaufan()} </div>
                    </div>
                    
                </div>
                <div><button type="button">Join Us</button></div>
                <div>
                  {/* <input defaultValue="" onChange={(e)=> this.props.TextBox_Onchange(e.target.value)} ></input>
                  */}
                  <input onChange={(e) => this.props.TextBox_Onchange(e.target.value)}></input>
                  </div> 
               
                </div>
                
        
            </div>
      </div>
    );
  }
}

export default Header;
