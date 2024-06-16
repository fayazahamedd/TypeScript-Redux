import { createStore, combineReducers, applyMiddleware } from "redux";
import postReducer from "./Reducer/postReducer";
import createSagaMiddleware from "redux-saga";
import commentsReducer from "./Reducer/commentsReducer";
import { getPostSaga } from "./Saga/post";
import { getCommentsSaga } from "./Saga/comments";


const rootReducer = combineReducers({
  postReducer,
  commentsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, middleware);
sagaMiddleware.run(getPostSaga);
sagaMiddleware.run(getCommentsSaga);

export default store;
