export function PostsIndex(props) {
  console.log(props)
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <img src={post.post_img_url} alt="" />
          <h2>{post.wine_name}</h2>
          <p>{post.description}</p>
          <h3>Rating: {post.rating}</h3>
          <button>More Info</button>
          </div>
      ))}
    </div>
  );
}
