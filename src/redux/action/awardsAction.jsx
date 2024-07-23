import axios from "axios";

export const GET_LIST_AWARDS = "GET_LIST_AWARDS";
export const GET_PAGE_CUST = "GET_PAGE_CUST";
export const GET_PAGE_BREAK = "GET_PAGE_BREAK";
export const GET_PAGE_ABOUT = "GET_PAGE_ABOUT";
export const GET_PAGE_PARTNER = "GET_PAGE_PARTNER";
export const GET_PAGE_BISNIS = "GET_PAGE_BISNIS";
export const GET_PAGE_PARTNER_LIST = "GET_PAGE_PARTNER_LIST";
export const GET_LIST_CUST = "GET_LIST_CUST";

export const aboutPage = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_PAGE_ABOUT,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/pages?slug=about-us&&.embed",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_PAGE_ABOUT,
          payload: {
            loading: false,
            data: Response.data[0],
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGE_ABOUT,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
export const bisnissPage = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_PAGE_BISNIS,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/posts?categories=5&&.embed",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_PAGE_BISNIS,
          payload: {
            loading: false,
            data: Response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGE_BISNIS,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
export const pageBreak = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_PAGE_BREAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/posts?categories=4&&.embed",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_PAGE_BREAK,
          payload: {
            loading: false,
            data: Response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGE_BREAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
export const awardsList = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_AWARDS,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/posts?categories=6&&.embed",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_LIST_AWARDS,
          payload: {
            loading: false,
            data: Response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_AWARDS,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};

export const custPage = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_PAGE_CUST,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/pages?slug=customer&&.embed",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_PAGE_CUST,
          payload: {
            loading: false,
            data: Response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGE_CUST,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
export const partnerPage = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_PAGE_PARTNER,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/pages?slug=partner",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_PAGE_PARTNER,
          payload: {
            loading: false,
            data: Response.data[0],
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGE_PARTNER,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
export const listPartnerPage = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_PAGE_PARTNER_LIST,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/posts?per_page=18&&.embed&&categories=3",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_PAGE_PARTNER_LIST,
          payload: {
            loading: false,
            data: Response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGE_PARTNER_LIST,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
export const listCust = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_CUST,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    // get Api
    axios({
      method: "GET",
      url: "https://api.astelst.com/wp-json/wp/v2/posts?per_page=17&&.embed&&categories=8",
      timeout: 120000,
    })
      .then((Response) => {
        // berhasil
        dispatch({
          type: GET_LIST_CUST,
          payload: {
            loading: false,
            data: Response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_CUST,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
