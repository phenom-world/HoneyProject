import * as api from "../api/index.js";

import {
  AUTH,
  FORGOTPASSWORD,
  RESETPASSWORD,
} from "../constant/actionTypes.js";

export const signup = (formData, navigate, setError) => async (dispatch) => {
  try {
    await api.signUp(formData);

    navigate(`/verify/${formData?.email}`);
  } catch (error) {
    setError(error.response.data.message)
  }
};

export const verify = (id, token) => async (dispatch) => {
  try {

    await api.verifyEmail(id, token);

  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, navigate, setError) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({
      type: AUTH,
      data,
    });

    navigate("/");
  } catch (error) {
    setError(error.response.data.message)
  }
};

export const forgotpassword = (formData, navigate) => async (dispatch) => {
  try {
    await api.forgotPassword(formData);
    dispatch({
      type: FORGOTPASSWORD,
      payload: formData,
    });

    navigate(`/emailsent/${formData?.email}`);
  } catch (error) {
    console.log(error);
  }
};

export const resetpassword =
  (resettoken, formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.resetPassword(resettoken, formData);

      dispatch({
        type: RESETPASSWORD,
        data,
      });

      navigate("/");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
