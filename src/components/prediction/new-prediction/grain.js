import React from "react";
import { connect } from "react-redux";

class GrainDropDown extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8080/grains/")
      .then(res => res.json())
      .then(result => {
        // alert(result)
        this.props.loadgrains(result);
      });
  }

  render() {
    return (
      <div>
        <select
          id="grains"
          className="form-control"
          onChange={e => {
            this.props.grainselected(e.target.value);
          }}
        >
          <option>NONE</option>
          {this.props.grainList.map((item, index) => (
            <option key={index} value={item.grainName}>
              {item.grainName}
            </option>
          ))}
        </select>
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grainList: state.grain.grainList,
    grainSelected: state.grain.grainSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadgrains: result =>
      dispatch({
        type: "LOAD_GRAINS",
        payload: result
      }),
    grainselected: item =>
      dispatch({
        type: "SELECTED_GRAIN",
        payload: item
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrainDropDown);
