import React from "react";
import Auth from "../../Auth";
import { connect } from "react-redux";

class Header extends React.Component {
  componentDidMount(){
    let user =new Auth();
    this.props.loaduser(user.currentUser().name)
  }
  logout = () => {
    let auth = new Auth();
    alert("calling logout");
    auth.logout();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <div className="nav-item nav-item-header" href="#">
            Sowing App
          </div>
          <div />
          
          <div>
          <span style={{color:"white",marginRight:5}}>{this.props.loggedInUser}</span>
            <button
              style={{ borderRadius: 4, backgroundColor: "white" }}
              onClick={this.logout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.user.loggedInUser
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loaduser: result =>
      dispatch({
        type: "LOAD_USER",
        payload: result
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
