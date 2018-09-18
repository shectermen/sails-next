import React from 'react'
import Header from '../chunks/main/Header'
import Footer from '../chunks/main/Footer'
import '../styles/app.sass'

export class MainLayout extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer/>
      </React.Fragment>
    )
  }
}

export default MainLayout;

