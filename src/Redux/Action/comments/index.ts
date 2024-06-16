export const GET_COMMENTS = "GET_COMMENTS";
export const GOT_COMMENTS = "GOT_COMMENTS";
export const DELETE_COMMENTS = "DELETE_COMMENTS";

export const getComments = () => {
  return {
    type: GET_COMMENTS,
  };
};

export const deletePost = (id: number)  => {
  return {
    type: DELETE_COMMENTS,
    payload: id
  }
}
