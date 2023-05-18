import "./PostsCard.css";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PostsCard(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img className="card-header-img" src={props.post.user_image} />
        <h5>{props.post.user_name}</h5>
      </div>
      <img src={props.post.post_img_url} className="card-img-top" alt="post" />
      <div className="card-body">
        <h5 className="card-title">{props.post.wine_name}</h5>
        <p className="card-text">{props.post.description}</p>
      </div>
      <div className="card-footer">
        <div className="rating">
          Rating:{" "}
          {[...Array(props.post.rating)].map((star, index) => (
            <FontAwesomeIcon icon={faWineBottle} key={index} />
          ))}
        </div>
        <button type="button" className="btn btn-primary" onClick={() => props.onSelectPost(props.post)}>
          More Info
        </button>
      </div>
    </div>
  );
}
