import { put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../../Action/comments";
import { fetchComments } from "../../Service/commenst";


export function* getCommentsSaga() {
  yield takeEvery(actionType.GET_COMMENTS, fetchCommentsSaga);
}

function* fetchCommentsSaga(action) {
try {
    const response = yield call(fetchComments, action.payload);
    yield put({
      type: actionType.GOT_COMMENTS,
      payload: response,
  });
  } catch (err) {
    console.log(err);
  }
}
