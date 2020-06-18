import fetch from 'isomorphic-unfetch';

const Post = props => {
  const {
    post: { userId, title, body }
  } = props;
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    setLoading(true);

    fetchUser();
  }, []);
  async function fetchUser() {
    let user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    user = await user.json();
    setUser(user);
    setLoading(false);
  }
  return (
    <div className="card bg-light mb-3">
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <>
          <div className="card-header d-flex">
            <div className="text-muted">
              Written By{' '}
              <small className="badge badge-success">{user && user.name}</small>
            </div>{' '}
            <small className="text-muted ml-auto">12/05/2020</small>
          </div>
          <div
            className="card-body"
            style={{ height: '100px', overflow: 'auto' }}
          >
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{body.slice(0, 30)}...</p>
          </div>
          <div className="card-footer">
            <a
              className="btn btn-sm btn-outline-primary mt-3"
              style={{ width: '50%' }}
            >
              Read More
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
