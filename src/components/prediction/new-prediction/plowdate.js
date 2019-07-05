import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux'
import './datepicker.css'

class PlowDate extends React.Component {
  render() {
    return (
      <DatePicker
        selected={this.props.dateSelected}
        onSelect={this.props.dateUpdate}
        dateFormat="MMMM d, yyyy"
        className="datePicker"
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    dateSelected: state.plow.dateSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dateUpdate: result =>
      dispatch({
        type: "DATE_SELECTED",
        payload: result
      })
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(PlowDate);
