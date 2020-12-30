import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getAllOrganizationsApi, getZenApi, getOctocatApi } from '../api/api';
import {
  ORGANIZATION_FETCH_REQUESTED,
  receiveAllOrganizations,
  allOrganizationsFetchFailed,
  INIT_REQUESTED,
  receiveZen,
  zenFetchFailed,
  receiveOctocat,
} from './actions';

function* fetchOrganizationsSaga() {
  try {
    const organizationData = yield call(getAllOrganizationsApi);
    yield put(receiveAllOrganizations(organizationData));
  } catch (e) {
    yield put(allOrganizationsFetchFailed(e.message));
  }
}

function* watchFetchOrganizations() {
  yield takeLatest(ORGANIZATION_FETCH_REQUESTED, fetchOrganizationsSaga);
}

function* initSaga() {
  try {
    const zenText = yield call(getZenApi);
    const octocatText = yield call(getOctocatApi);

    yield put(receiveZen(zenText));
    yield put(receiveOctocat(octocatText));
  } catch (e) {
    yield put(zenFetchFailed(e.message));
  }
}

function* watchInit() {
  yield takeLatest(INIT_REQUESTED, initSaga);
}

export default function* mySaga() {
  yield all([watchFetchOrganizations(), watchInit()]);
}
