import b2cauth from 'react-azure-adb2c';
import decodeJWT from 'jwt-decode'; 


class Auth {
  isLoggedIn() {
    if (b2cauth.getAccessToken()) {
      return true;
    }

    return false;
  }

  logout() {
    b2cauth.signOut();
  }

  getToken() {
    return b2cauth.getAccessToken();
  }

  currentUser() {
    const decoded = decodeJWT(b2cauth.getAccessToken());
    console.log("b2cauth: " , b2cauth.getAccessToken());
    return {
      name: decoded.name,
      firstName: decoded.given_name,
      lastName: decoded.family_name,
      emails: decoded.emails,
      city: decoded.city,
      country: decoded.country,
      displayName: decoded.displayName,
      state: decoded.state,
      postalCode: decoded.postalCode,
      streetAddress: decoded.streetAddress,
      
    };
  }
}

export default Auth;