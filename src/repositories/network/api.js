import * as APIClient from './instanceService';
import React, {Component, createRef} from 'react';
import  {startLoadingAction,stopLoadingAction} from '../../redux/actions/ index'
export let networkRef = createRef();
const api = {
  getTest,
  getTypicode,
};

export { api };


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

async function getTypicode(dispatch,onSuccess) {
  dispatch(startLoadingAction());
  await APIClient.getTypicode()
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