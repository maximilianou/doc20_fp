import Link from 'next/link'
import withLayout from '../comps/MyLayout.js';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Blog = () => (
    <div>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="starting-next" title="Starting Next.js" />
        <PostLink id="learning-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploying-nextjs" title="Deploying next apps" />
      </ul>
    </div>
)


export default withLayout(Blog)
