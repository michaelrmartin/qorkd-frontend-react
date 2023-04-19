import "./PostsIndex.css"
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function PostsIndex(props) {
  console.log(props)
  
  return (
    <div>
    <h1>All posts</h1>
    <div id="posts-index">
      {props.posts.map((post) => (
         <div key={post.id} className="posts">
        <div className="card">
        <div className="card-header">
          <img className="card-header-img" src={post.user_image}/>
          <h5>{post.user_name}</h5>
        </div>
        <img src={post.post_img_url} className="card-img-top" alt="post" />
        <div className="card-body">
          <h5 className="card-title">{post.wine_name}</h5>
          <p className="card-text">{post.description}</p>
          <div className="rating">Rating: {[...Array(post.rating)].map((star, index) => (
          <FontAwesomeIcon icon={faWineBottle} key={index} />
          ))}
          </div>
          <button className="btn-primary" onClick={() => props.onSelectPost(post)}>More Info</button>
            </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}
