import BlogPost from 'src/components/BlogPost/BlogPost'

export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <div>
      <h2>Post</h2>
      <BlogPost key={post.id} post={post} />
    </div>
  ))
}
