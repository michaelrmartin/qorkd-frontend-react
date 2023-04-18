export function PostsShow(props) {
  return (
    <div>
      <p><strong>{props.post.user_name}</strong></p>
      <img className="user-image" src={props.post.user_image} />
      <img src={props.post.post_img_url} alt="" />
      <h2>{props.post.wine_name}</h2>
      <p>{props.post.description}</p>
      <h3>Rating: {props.post.rating}</h3>
    </div>
  )
}