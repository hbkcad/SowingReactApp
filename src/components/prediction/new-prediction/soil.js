import React from "react";
import { connect } from "react-redux";
import './datepicker.css'

class SoilDropDown extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8080/soil/")
      .then(res => res.json())
      .then(result => {
        // alert(result)
        this.props.loadsoil(result);
      });
  }

  render() {
    return (
      <div>
        <select
          id="soil"
          className="form-control"
          onChange={e => {
            this.props.soilselected(e.target.value);
          }}
        >
          <option>NONE</option>
          {this.props.soilList.map((item, index) => (
            <option key={index} value={item.soilName}>
              {item.soilName}
            </option>
          ))}
        </select>
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    soilList: state.soil.soilList,
    soilSelected: state.soil.soilSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadsoil: result =>
      dispatch({
        type: "LOAD_SOIL",
        payload: result
      }),
    soilselected: item =>
      dispatch({
        type: "SELECTED_SOIL",
        payload: item
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoilDropDown);
