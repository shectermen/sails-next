import React from 'react'


export class HowTo extends React.PureComponent {
  render(){
    return(
      <div className="container instructions">
        <h2>How to convert YouTube to mp3</h2>
        <ol>
          <li>Copy a link to a YouTube video</li>
          <li>Paste that link into an Input Field at Flv2mp3 website</li>
          <li>Press "Convert to mp3" to get your track!</li>
        </ol>
      </div>
    )
  }
}

export default HowTo;