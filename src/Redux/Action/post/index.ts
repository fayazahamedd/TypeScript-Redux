export const GET_POST = "GET_POST";
export const GOT_POST = "GOT_POST";
export const DELETE_POST = "DELETE_POST";

export const getPost = () => {
  return {
    type: GET_POST,
  };
};

export const deletePost = (id: number)  => {
  return {
    type: DELETE_POST,
    paylod: id
  }
}
