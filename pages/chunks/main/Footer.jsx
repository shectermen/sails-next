import React from 'react'

export class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="services"> 
          <div className="container footer__container">
            <a href="#">YouTube to MP3</a>
            <a href="#">YouTube to avi</a>
            <a href="#">YouTube to MP4</a>
            <a href="#">YouTube downloader</a>
            <a href="#">Clip converter</a>
            <a href="#">Alternative</a>
          </div>
        
        </div>
    
        <div className="container">
          <div className="container footer__container">
            <div className="copyright">
                © 2018 <a href="">flv2mp3.org</a>
            </div>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
            <a href="#">Feedback</a>
            <a href="#">Advertisers</a>
            <a href="#">Copyright Claims</a>
            <a href="#">DMCA</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;