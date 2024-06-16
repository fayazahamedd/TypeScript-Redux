import { ItemProps } from "../../pages/Post";

interface State {
  isLoading: boolean;
  response?: ItemProps[];
  statusCode?: number;
}

const initialState: State = {
  isLoading: false,
  response: undefined,
  statusCode: undefined,
};

interface GetPostAction {
  type: "GET_POST";
}

interface GotPostAction {
  type: "GOT_POST";
  payload: ItemProps[];
}

interface DeletePostAction {
  type: "DELETE_POST";
  paylod: number;
}

type ActionTypes = GetPostAction | GotPostAction | DeletePostAction;

const postReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        isLoading: true,
      };

    case "GOT_POST":
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        statusCode: 200,
      };

    case "DELETE_POST":
      if (state.response) {
        const filterData = state.response.filter(
          (item: ItemProps) => item.id !== action.paylod
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

export default postReducer;
