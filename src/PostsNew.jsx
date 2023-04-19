export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div className="form-control">
          Description: <input type="text" />
        </div>
        <div className="form-control">
          Wine Name: <input type="text" />
        </div>
        <div className="form-control">
          Rating: <input type="integer" />
        </div>
        <div className="form-control">
          Image: <input type="text" />
        </div>
      </form>
    </div>
  );
}
