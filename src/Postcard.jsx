export function PostCard(props) {
  const { post } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={post.post_img_url} className="card-img-top" alt="post" />
      <div className="card-body">
        <h5 className="card-title">{post.wine_name}</h5>
        <p className="card-text">{post.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}