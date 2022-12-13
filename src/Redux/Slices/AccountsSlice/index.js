
const accounts = JSON.stringify(localStorage.getItem("sub-users")).accounts || []; 
const permmisions = JSON.stringify(localStorage.getItem("permmisions")) || {
    country: { select: false, delete: false, edit: false, add: false }
};

const initialState = {
    subUsers: {
        accounts,
        permmisions
    }
};

function accountsReducer (state = initialState, action) {
    switch (action.type) {
        
        default :
            return state;
    }
}

export default accountsReducer;