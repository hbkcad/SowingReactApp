import React from "react";
import { connect } from 'react-redux';
import './map.css'

class LoadMap extends React.Component {
  render() {
    return (
      <div
        id="map-container"
        className="z-depth-1-half map-container"
        style={{height:500+"px"}}
      >
        <iframe
          src={"https://maps.google.com/maps?q="+this.props.citySelected+"&t=&z=10&ie=UTF8&iwloc=&output=embed"}
          frameborder="0"
          style={{border:0+"em"}}
          
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        citySelected: state.city.citySelected
    }
}


export default connect(mapStateToProps)(LoadMap);
