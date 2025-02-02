import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getAllOrganizationsApi, getZenApi, getOctocatApi, getEmojisApi } from '../api/api';
import {
  ORGANIZATION_FETCH_REQUESTED,
  receiveAllOrganizations,
  allOrganizationsFetchFailed,
  INIT_REQUESTED,
  receiveZen,
  initFailed,
  receiveOctocat,
  EMOJI_FETCH_REQUESTED,
  receiveEmojis,
  emojisFetchFailed,
} from './actions';

function* fetchOrganizationsSaga() {
  try {
    const organizationData = yield call(getAllOrganizationsApi);
    yield put(receiveAllOrganizations(organizationData));
  } catch (e) {
    yield put(allOrganizationsFetchFailed({ message: 'There was an error when fetching organizations' }));
    console.log(e);
  }
}

function* watchFetchOrganizations() {
  yield takeLatest(ORGANIZATION_FETCH_REQUESTED, fetchOrganizationsSaga);
}

function* fetchEmojisSaga() {
  try {
    const emojiData = yield call(getEmojisApi);
    yield put(receiveEmojis(emojiData));
  } catch (e) {
    yield put(emojisFetchFailed({ message: 'There was an error when fetching emojis :(' }));
    console.log(e);
  }
}

function* watchFetchEmojis() {
  yield takeLatest(EMOJI_FETCH_REQUESTED, fetchEmojisSaga);
}

function* initSaga() {
  try {
    const zenText = yield call(getZenApi);
    const octocatText = yield call(getOctocatApi);

    yield put(receiveZen(zenText));
    yield put(receiveOctocat(octocatText));
  } catch (e) {
    yield put(initFailed({ message: 'There was an error when initializing the home page' }));
    console.log(e);
  }
}

function* watchInit() {
  yield takeLatest(INIT_REQUESTED, initSaga);
}

export default function* mySaga() {
  yield all([watchFetchOrganizations(), watchFetchEmojis(), watchInit()]);
}
