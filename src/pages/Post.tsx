/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../Redux/Action/post";

export interface ItemProps {
  id: number;
  title: string;
  body: string;
}

interface PostState {
  postReducer: {
    isLoading: boolean;
    response: ItemProps[] | undefined;
    statusCode: undefined;
  };
}

const Post: React.FC = () => {
  const dispatch = useDispatch();
  const postItems = useSelector(
    (state: PostState) => state.postReducer.response
  );
  const isLoading = useSelector(
    (state: PostState) => state.postReducer.isLoading
  );

  useEffect(() => {
    dispatch(getPost());
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <h1>Items are</h1> <button onClick={() => navigate("/")}>Home</button>
      <div className="flex flex-wrap justify-around">
        {isLoading ? (
          <div className="text-4xl text-green-500 font-extrabold mt-4">
            Loading .....
          </div>
        ) : (
          <>
            {postItems &&
              postItems.map((item: ItemProps) => (
                <div
                  className="flex flex-col w-[45%] my-2 items-center border p-2 rounded-xl border-red-600"
                  key={item.id}
                >
                  <div className="flex flex-row ">
                    <h3 className="text-5xl mt-6 p-5 text-amber-400">
                      {item.id}
                    </h3>
                    <div className="flex flex-col text-left">
                      <h5 className="text-wrap text-green-500">{item.title}</h5>
                      <p className="text-wrap text-violet-600">{item.body}</p>
                    </div>
                    <div className="flex flex-col ml-auto">
                      <button onClick={() => dispatch(deletePost(item.id))}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Post;
