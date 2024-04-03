import { GET_LIST_AWARDS, GET_PAGE_CUST } from "../action/awardsAction";

const innitialState ={
    getListAwards : false,
    getListAwardsLoading : false,
    getListAwardsError : false,
   getPageCust : false,
   getPageCustLoading : false,
   getPageCustError : false,
   
}

const awards = (state = innitialState, action) =>{
    switch (action.type) {
        case GET_LIST_AWARDS :
            return {
                ...state,
                getListAwards : action.payload.data,
                getListAwardsLoading : action.payload.loading,
                getListAwardsError : action.payload.errorMassage
            }
        case GET_PAGE_CUST :
            return {
                ...state,
                getPageCust : action.payload.data,
                getPageCustLoading : action.payload.loading,
                getPageCustError : action.payload.errorMassage
            }
        default:
            return state;
    }
}

export default awards