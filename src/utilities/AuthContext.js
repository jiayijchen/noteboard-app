import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper';

// code for user authentication
const AuthContext = createContext({});

// helper function that exports needed/wanted data for provider
export const AuthHelper = () => {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});
  const [notesData, setNotesData] = useState([]);

  // retaining user login token
  useEffect(() => {
    let lsToken = window.localStorage.getItem('token');

    if (lsToken) {
      setToken(lsToken);
    }
  }, [])

  // get user data upon receiving token
  useEffect(() => {
    if (token.length > 0) {
      getUser();
    }
  }, [token])

  // get note data upon receiving user data
  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      axiosHelper({
        method: 'get',
        route: '/api/v1/users/' + userData.id,
        token,
        successMethod: saveNotesData
      });
    }
  }, [userData])

  function saveToken(res, showForm) {
    const APItoken = res.data.access_token || res.data.token;
    showForm(false);
    setToken(APItoken);
    window.localStorage.setItem('token', APItoken);
  }

  function saveUserData(res) {
    const APIUserData = res.data;
    setUserData(APIUserData);
    window.localStorage.setItem('user_data', JSON.stringify(APIUserData));
  }

  function saveNotesData(res) {
    const APINotesData = res.data.data.attributes.notes;
    console.log(APINotesData);
    if (notesData.length > 0) {
      setNotesData(prevNotesData => ([
        ...prevNotesData,
        ...APINotesData
      ]));
      window.localStorage.setItem('notes_data', notesData);
    } else {
      setNotesData(APINotesData);
      window.localStorage.setItem('notes_data', notesData);
    }
  }

  function destroyStorage(res) {
    setUserData({})
    setNotesData([]);
    setToken('');
    window.localStorage.removeItem('user_data');
    window.localStorage.removeItem('notes_data');
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
      successMethod: (r) => saveToken(r, f)
    })
  }

  // log out
  function logout() {
    axiosHelper({
      method: 'get',
      route: '/api/v1/logout',
      token,
      successMethod: destroyStorage
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

  return { token, userData, notesData, setNotesData, register, login, logout };
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