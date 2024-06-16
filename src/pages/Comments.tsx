/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getComments, deletePost} from "../Redux/Action/comments";

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface CommentsProps {
  commentsReducer: {
    isLoading: boolean;
    response: Comments[] | undefined;
    statusCode: undefined;
  };
}

const Comments: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const commentItems = useSelector(
    (state: CommentsProps) => state.commentsReducer.response
  );

  const isLoading = useSelector(
    (state: CommentsProps) => state.commentsReducer.isLoading
  );

  useEffect(() => {
    dispatch(getComments());
  }, []);

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
            {" "}
            {commentItems &&
              commentItems.map((item: Comments) => (
                <div
                  className="flex flex-col w-[45%] my-2 items-center justify-center border p-2 rounded-xl border-red-600"
                  key={item.id}
                >
                  <div className="flex flex-row">
                    <h3 className="text-5xl mt-6 p-5 text-amber-400">
                      {item.id}
                    </h3>
                    <div className="flex flex-col text-left">
                      <h5 className="text-wrap text-green-500">
                        {item.name ? item.name : "empty"}
                      </h5>
                      <p className="text-wrap text-violet-600">
                        {item.body ? item.body : "empty"}
                      </p>
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

export default Comments;
