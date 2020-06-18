import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';
import Post from '../../components/Post';

const Posts = props => {
  const { posts } = props;
  return (
    <Layout>
      <div className="container">
        <div className="row py-5">
          {posts.map(post => {
            return (
              <div className="col-md-4" key={Math.random()}>
                <Post post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  return {
    props: {
      posts
    }
  };
}

export default Posts;
