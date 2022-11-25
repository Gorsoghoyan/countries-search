export const selectCountries = (state) => state.countries.data; 
export const selectToken = (state) => state.auth.token;
export const selectEditPopupData = (state) => state.popup.editPopup.countryData;
export const selectOpenAddPopup = (state) => state.popup.addPopup.open;