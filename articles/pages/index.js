import withLayout from '../comps/MyLayout'
import { withRouter } from 'next/router'
const Routing = withRouter( props =>  ( <h1>{props.router.query.title}</h1> ) )
const Index = () => 
    (
      <div>
        <Routing />
        <p>One Article Index</p> 
      </div>
    ) 
export default withLayout(Index)
