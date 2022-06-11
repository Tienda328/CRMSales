import * as APIClient from './instanceService';
import React, {Component, createRef} from 'react';
import  {startLoadingAction,stopLoadingAction} from '../../redux/actions/ index'
export let networkRef = createRef();
const api = {
  checkVersion,
  getTest,
};

export { api };

async function checkVersion() {
  await APIClient.checkVersion({version: '6.3.52', app: 'ios'})
    .then(function (response) {
      let status = response.status;
      let data = response.data;
      if (status && status === 200 && data) {
        console.log('serrrdata', data)
      } else {
        console.log('serrr', error)
      }
    })
    .catch(function (error) {
      console.log('serrorss',error)
    });
}

async function getTest(dispatch,onSuccess) {
  dispatch(startLoadingAction());
  await APIClient.getTest()
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
      console.log('serrorss',error)
    });
    dispatch(stopLoadingAction());
}
