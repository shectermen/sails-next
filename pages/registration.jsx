import React from 'react';
import { withRouter } from 'next/router'

class Reagister extends React.Component {
  render() {
    const {router} = this.props
    console.log(router)
    return <div>{router.pathname}</div>
  }
}

export default withRouter(Reagister)