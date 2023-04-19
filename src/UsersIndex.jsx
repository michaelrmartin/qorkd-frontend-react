import "./UsersIndex.css"

export function UsersIndex(props) {
  console.log(props)

  return (
    <div className="container">
      <h1>All Users</h1>
      <div id="users-index">
      {props.users.map((user) => (
         <div key={user.id} className="users">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={user.user_img_url} className="img-fluid" alt="..." />
                </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle">@{user.username}</h6>
                  <p className="card-text">{user.bio}</p>
                  <p className="card-text"><small className="text-body-secondary">{user.location}</small></p>
                </div>
                <div className="card-footer">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}