export function PostsIndex(props) {
  console.log(props)
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <p><strong>{post.user_name}</strong></p>
          <img className="user-image" src={post.user_image} />
          <img src={post.post_img_url} alt="" />
          <h2>{post.wine_name}</h2>
          <p>{post.description}</p>
          <h3>Rating: {post.rating}</h3>
          <button onClick={() => props.onSelectPost(post)}>More Info</button>
          </div>
      ))}
    </div>
  );
}
