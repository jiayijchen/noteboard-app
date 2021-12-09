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

  function saveToken(res) {
    const APItoken = res.data.data.token || res.data.access_token;
    setToken(APItoken);
    getUser();
    window.localStorage.setItem('token', APItoken);
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
  function register(regisData) {
    axiosHelper({
      data: regisData,
      method: 'post',
      route: '/api/auth/register', 
      successMethod: saveToken
    })
  }

  // log in
  function login(loginData) {
    axiosHelper({
      data: loginData,
      method: 'post',
      route: '/oauth/token', 
      successMethod: saveToken
    })
  }

  // log out
  function logout() {
    axiosHelper({
      url: '/api/auth/logout',
      successMethod: destroyToken,
      token: token
    })
  }

  // getting user information (such as the token, or the userdata)
  function getUser() {
    axiosHelper({
      method: "get",
      route: "/api/v1/user",
      token: token,
      successMethod: saveUserData
    })
  }

  return { token, userData, register, login, logout, getUser};
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