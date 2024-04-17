import { GET_LIST_AWARDS, GET_PAGE_CUST,GET_PAGE_ABOUT,GET_PAGE_PARTNER_LIST,GET_PAGE_PARTNER ,GET_PAGE_BREAK, GET_PAGE_BISNIS} from "../action/awardsAction";

const innitialState ={
    getListAwards : false,
    getListAwardsLoading : false,
    getListAwardsError : false,
    getPageCust : false,
    getPageCustLoading : false,
    getPageCustError : false,
    getPageAbout : false,
    getPageAboutLoading : false,
    getPageAboutError : false,
    getPagePartner : false,
    getPagePartnerLoading : false,
    getPagePartnerError : false,
    getPagePartnerList : false,
    getPagePartnerListLoading : false,
    getPagePartnerListError : false,
    getPageBreak : false,
    getPageBreakLoading : false,
    getPageBreakError : false,
    getPageBisnis : false,
    getPageBisnisLoading : false,
    getPageBisnisError : false,
   
}

const awards = (state = innitialState, action) =>{
    switch (action.type) {
        case GET_PAGE_ABOUT :
            return {
                ...state,
                getPageAbout : action.payload.data,
                getPageAboutLoading : action.payload.loading,
                getPageAboutError : action.payload.errorMassage
            }
        case GET_PAGE_BISNIS :
            return {
                ...state,
                getPageBisnis : action.payload.data,
                getPageBisnisLoading : action.payload.loading,
                getPageBisnisError : action.payload.errorMassage
            }
        case GET_PAGE_BREAK :
            return {
                ...state,
                getPageBreak : action.payload.data,
                getPageBreakLoading : action.payload.loading,
                getPageBreakError : action.payload.errorMassage
            }
        case GET_PAGE_PARTNER_LIST :
            return {
                ...state,
                getPagePartnerList : action.payload.data,
                getPagePartnerListLoading : action.payload.loading,
                getPagePartnerListError : action.payload.errorMassage
            }
        case GET_PAGE_PARTNER :
            return {
                ...state,
                getPagePartner : action.payload.data,
                getPagePartnerLoading : action.payload.loading,
                getPagePartnerError : action.payload.errorMassage
            }
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