import { Comments } from "../../pages/Comments";

interface State {
  isLoading: boolean;
  response?: Comments[];
  statusCode?: number;
}

const initialState: State = {
  isLoading: false,
  response: undefined,
  statusCode: undefined,
};

interface actionTypes {
  type: "GET_COMMENTS" | "GOT_COMMENTS" | "DELETE_COMMENTS";
  payload?: unknown | number;
}

const commentsReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        isLoading: true,
      };

    case "GOT_COMMENTS":
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        statusCode: 200,
      };

    case "DELETE_COMMENTS":
      if (state.response) {
        const filterData = state.response.filter(
          (item: Comments) => item.id !== action.payload
        );
        return {
          ...state,
          response: filterData,
          isLoading: false,
          statusCode: 200,
        };
      }
      return state;

    default:
      return state;
  }
};

export default commentsReducer;
