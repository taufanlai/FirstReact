import React from 'react';

class TopNavBar extends React.Component{
  constructor(props){
    super(props);
}

alertMSG(){
  alert('Test');
}

render() {
    return (
      <div class="TopNavBar">
          <ul >
            <li>
              <ul class="TopLeftNavBar">
                <li>  <a href="#">QTemu</a></li>
                <li>  <a href="#">Create Meetup</a></li>
                <li>  <a href="#">explore</a></li>
                <li><div onClick={()=>this.props.TopNavBar_TestKlik()}>TestKlik</div></li>
              </ul>
              
            
            </li>
            
            <li>
                <ul class="TopRightNavBar">
                    <li>  <a href="#">Login</a></li>
                 </ul>            
            </li>
          </ul>
  
      </div>
    );
  }

}




export default TopNavBar;
