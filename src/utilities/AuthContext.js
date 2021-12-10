import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper';

// code for user authentication
const AuthContext = createContext({});

// helper function that exports needed/wanted data for provider
export const AuthHelper = () => {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});

  // retaining user login information
  useEffect(() => {
    let lsToken = window.localStorage.getItem('token');

    if (lsToken) {
      setToken(lsToken);
    }
  }, [])

  useEffect(() => {
    if(token.length > 0) {
      getUser();
    }
  }, [token])

  function saveToken(res, showLogin) {
    const APItoken = res.data.access_token // || res.data.data.token;
    setToken(APItoken);
    window.localStorage.setItem('token', APItoken);
    showLogin(false);
  }

  function saveUserData(res) {
    const APIUserData = res.data;
    setUserData(APIUserData);
  }

  function destroyToken(res) {
    setToken('');
    window.localStorage.removeItem('token');
  }

  // sign up
  function register(registerData, f) {
    axiosHelper({
      data: registerData,
      method: 'post',
      route: '/api/register', 
      successMethod: (r) => saveToken(r, f)
    })
  }

  // log in
  function login(loginData, f) {
    axiosHelper({
      data: loginData,
      method: 'post',
      route: '/oauth/token', 
      successMethod: (r)=>saveToken(r, f)
    })
  }

  // log out
  function logout() {
    axiosHelper({
      method: 'get',
      route: '/api/v1/logout',
      token,
      successMethod: destroyToken
    })
  }

  // getting user information (such as the token, or the userdata)
  function getUser() {
    axiosHelper({
      method: "get",
      route: '/api/v1/user',
      token,
      successMethod: saveUserData
    })
  }

  return { token, userData, register, login, logout};
}

// custom Provider component
export const AuthProvider = (props) => {

  const initialContext = AuthHelper();

  return (
    <AuthContext.Provider value={initialContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

// create a custom hook
export const useAuth = () => useContext(AuthContext);

export default AuthContext;