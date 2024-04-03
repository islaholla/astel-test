import axios from "axios";

export const GET_LIST_AWARDS = 'GET_LIST_AWARDS'
export const GET_PAGE_CUST = 'GET_PAGE_CUST'



export  const awardsList = () => {
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_LIST_AWARDS,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        axios({
            method: 'GET',
            url: "https://astelsolution.000webhostapp.com/wp-json/wp/v2/posts?categories=7&&.embed",
            timeout: 120000
        })
            .then((Response) => {
                // berhasil
                dispatch({
                    type: GET_LIST_AWARDS,
                    payload: {
                        loading: false,
                        data: Response.data,
                        errorMassage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_AWARDS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}

export  const custPage  = () => {
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_PAGE_CUST,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        axios({
            method: 'GET',
            url: "https://astelsolution.000webhostapp.com/wp-json/wp/v2/pages?slug=customer&&.embed",
            timeout: 120000
        })
            .then((Response) => {
                // berhasil
                dispatch({
                    type: GET_PAGE_CUST,
                    payload: {
                        loading: false,
                        data: Response.data,
                        errorMassage: false
                    }
                })
            })
            .catch((error) => {
                console.log("gagal")
                dispatch({
                    type: GET_PAGE_CUST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}
