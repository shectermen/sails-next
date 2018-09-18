import {withRouter} from 'next/router'
import MainLayout from './layouts/main'

export class Page extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <h1>{this.props.router.query.title}</h1>
        <p>This is the blog post content.</p>
      </MainLayout>
    )
  }
}


export default withRouter(Page)