import React from 'react';
import Link from 'next/link'

export class PostLink extends React.PureComponent {
  render() {
    const { title } =  this.props;
    return(
      <React.Fragment>
        <li>
          <Link href={`/post?title=${ title }`} as={`/p/whatever.js`}>
            <a>{ title }</a>
          </Link>
        </li>
      </React.Fragment>
    )
  }
}

export default PostLink;

