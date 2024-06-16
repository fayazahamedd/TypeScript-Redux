import { put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../../Action/post";
import { fetchPosts } from "../../Service/post";


export function* getPostSaga() {
  yield takeEvery(actionType.GET_POST, fetchPostSaga);
}

function* fetchPostSaga(action) {
  try {
    const response = yield call(fetchPosts, action.payload);
    yield put({
      type: actionType.GOT_POST,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
}
