import "./PostsIndex.css";
import { PostsCard } from "./PostsCard";

export function PostsIndex(props) {
  console.log(props);

  return (
    <div className="container">
      <h1>All posts</h1>
      <div id="posts-index">
        {props.posts.map((post) => (
          <div key={post.id} className="posts">
            <PostsCard post={post} onSelectPost={props.onSelectPost} />
          </div>
        ))}
      </div>
    </div>
  );
}
