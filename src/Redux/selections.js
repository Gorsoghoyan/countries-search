export const selectCountries = (state) => state.countries.data; 
export const selectToken = (state) => state.auth.token;
export const selectUserName = (state) => state.auth.userData?.userName;
export const selectCountryPermissions = (state) => state.auth.userData?.countryPermissions;
export const selectPopup = (state) => state.popup;
export const selectSubUsers = (state) => state.subUsers.data;