import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center align-middle">
      <p>Click to navigate</p>
      <br />
      <div className="flex flex-row">
        <button
          type="button"
          className="bg-pink-700 rounded-lg"
          onClick={() => navigate("/post")}
        >
          Post
        </button>

        <button
          type="button"
          className="bg-yellow-700 rounded-lg ml-6"
          onClick={() => navigate("/comments")}
        >
          Comments
        </button>
      </div>
    </div>
  );
};

export default HomePage;
