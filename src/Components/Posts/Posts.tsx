import Post from "../Post/Post";
import MainHeading from "../MainHeading/MainHeading";

import data from "../../json/data.json";

const Posts = () => {
  return (
    <div className="posts my-4">
      <MainHeading className="special">Recent Post</MainHeading>
      <div className="posts_list">
        {data.posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
