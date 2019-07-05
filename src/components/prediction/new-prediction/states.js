import React from "react";
import { connect } from "react-redux";

class StatesDropdown extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8080/states")
      .then(res => res.json())
      .then(result => {
        this.props.populate(result);
      });
  }

  render() {
    return (
      <div>
        <select
          id="states"
          className="form-control"
          onChange={e => this.props.selectedState(e.target.value)}
        >
          <option>NONE</option>
          {this.props.statesList.map((item, index) => (
            <option key={index} value={item.stateName}>
              {item.stateName}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    statesList: state.states.statesList,
    stateSelected: state.states.stateSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populate: result =>
      dispatch({
        type: "LOAD_STATES",
        payload: result
      }),
    selectedState: item =>
      dispatch({
        type: "SELECTED_STATE",
        payload: item
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatesDropdown);
