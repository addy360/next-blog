import fetch from 'isomorphic-unfetch';
const Post = props => {
  const {
    post: { userId, title, body }
  } = props;
  // const [loading, setLoading] = React.useState(false);
  // const [user, setUser] = React.useState();
  // React.useEffect(() => {
  //     setLoading(true)
  //     await fetch()
  // }, []);
  return (
    <div className="card bg-light mb-3">
      <div className="card-header d-flex">
        <p>Jane Doe</p> <small className="text-muted ml-auto">12/05/2020</small>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default Post;
