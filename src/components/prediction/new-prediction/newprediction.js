import React from "react";
import StatesDropdown from "./states";
import CityDropDown from "./cities";
import GrainDropDown from "./grain";
import LoadMap from "./loadMap";
import PlowDate from "./plowdate";
import SoilDropDown from './soil'
import './datepicker.css'

class NewPrediction extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="row">
                  <div className="col-xs-12 col-md-8">&nbsp;</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label
                  className="control-label col-sm-offset-2 col-sm-2"
                  htmlFor="states"
                >
                  States
                </label>
              </td>
              <td>
                <StatesDropdown />
              </td>
              <td>
                <label
                  className="control-label col-sm-offset-2 col-sm-2"
                  htmlFor="cities"
                >
                  Cities
                </label>
              </td>
              <td>
                <CityDropDown />
              </td>
              <td>
                <label
                  className="control-label col-sm-offset-2 col-sm-2"
                  htmlFor="grains"
                >
                  Grains
                </label>
              </td>
              <td>
                <GrainDropDown />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <table>
            <tr>
              <td>
                <div className="row">
                  <div className="col-xs-12 col-md-8">&nbsp;</div>
                </div>
              </td>
            </tr>
              <tr>
              <td>
                  <label
                    className="control-label col-sm-offset-2 col-sm-2"
                    htmlFor="soil"
                  >
                    {" "}
                    Soil
                  </label>
                </td>
                <td>
                    <SoilDropDown/>
                </td> 
                <td>
                  <label
                    className="control-label col-sm-offset-2 col-sm-2"
                    htmlFor="date"
                  >
                    {" "}
                    Date
                  </label>
                </td>
                <td>
                    <PlowDate/>
                </td>
                
              </tr>
            </table>
          </div>
          <div className="col-xs-6 col-md-4">
            <LoadMap />
          </div>
        </div>
      </div>
    );
  }
}
export default NewPrediction;
