import React from 'react'
import MainLayout from './layouts/main'
import fetch from 'isomorphic-unfetch'
import _ from '@sailshq/lodash'

export default class BlogPage extends React.Component {
  static async getInitialProps ({ req }) {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    return {
      shows: data
    }
  }
  render () {
    const { shows } = this.props;
    let PostTemplate

    if (shows.length){
      PostTemplate = shows.map(function(show){
        return (
          <div key={show.show.id}>
            <p> {show.show.id} </p>
            <img src={show.show.image.medium}/>
          </div>
        )
      })

    }
    else {
      PostTemplate = <p>Nope </p>
    }


    return (
      <MainLayout>
        <h1> asd </h1>
        <div>{PostTemplate} </div>
      </MainLayout>
    )
  }
}