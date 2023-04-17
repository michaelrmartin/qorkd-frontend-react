export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Wine Name: <input type="text" />
        </div>
        <div>
          Rating: <input type="integer" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
      </form>
    </div>
  );
}
