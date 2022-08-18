import * as APIClient from './instanceService';
import * as APIClientGet from './/getApi';
import React, {Component, createRef} from 'react';
import { Alert, Platform } from 'react-native';
import  {startLoadingAction,stopLoadingAction} from '../../redux/actions/ index'
export let networkRef = createRef();
const api = {
  getTest,
  getTypicode,
};

export { api };


function showMessage(msg) {
  setTimeout(() => {
    Alert.alert(
      'THong baos',
      msg,
      [{ text: 'Dong y', onPress: () => { } }],
      { cancelable: false },
    );
  }, 700);
}

async function getTest(dispatch,onSuccess) {
  dispatch(startLoadingAction());
  await APIClientGet.getTest()
    .then(function (response) {
      let status = response.status;
      let data = response.data;
      if (status && status === 200 && data) {
        onSuccess(response.data);
      } else {
        console.log('serrr', error)
      }
    })
    .catch(function (error) {
      showMessage('sdsdsdsd');

    });
    dispatch(stopLoadingAction());
}

async function getTypicode(dispatch,onSuccess) {
  dispatch(startLoadingAction());
  await APIClientGet.getTypicode()
    .then(function (response) {
      let status = response.status;
      let data = response.data;
      if (status && status === 200 && data) {
        onSuccess(response.data);
      } else {
        console.log('serrr', error)
      }
    })
    .catch(function (error) {
      showMessage('error');
    });
    dispatch(stopLoadingAction());
}