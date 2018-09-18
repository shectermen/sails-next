import React from 'react'

export class Download extends React.PureComponent {
  render(){
    return(
      <div className="download-sentence">
        <div className="container download-sentence__container">
          <button className="button button_color_green" >DOWNLOAD CONVERTER FOR FREE</button>
          <span className="download-sentence__notice">Do you want fast and easy conversions in any format?</span>
        </div>
      </div>
    )
  }
}

export default Download;