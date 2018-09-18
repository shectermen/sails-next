import React from 'react'

export class Header extends React.PureComponent {
  render() {
    return (
        <header className="header">
        <div className="container header__container">
        
        <div className="ads"> </div>
        
        <div className="convert-form">
          <div className="logo">
            <a href="/">
              <img src='./images/logo.svg'/>
            </a>
          </div>

        
          <div className="convert-form__format-container">

            <div className="convert-form__format-container__radio">
              <input id="avihd" type="radio" name="format" value="avihd" />
              <label htmlFor="avihd">AVI HD</label>
            </div>
          
            <div className="convert-form__format-container__radio">
              <input id="avi" type="radio" name="format" value="avi" />
              <label htmlFor="avi">AVI </label>
            </div>
            
            <div className="convert-form__format-container__radio">
              <input id="mp4hd" type="radio" name="format" value="mp4hd"/>
              <label htmlFor="mp4hd"> MP4HD</label>
            </div>
            
            <div className="convert-form__format-container__radio">
              <input id="mp4" type="radio" name="format" value="mp4" />
              <label htmlFor="mp4">MP4</label>
            </div>

            <div className="convert-form__format-container__radio">
              <input id="mp3" type="radio" name="format" value="mp3" />
              <label htmlFor="mp3">MP3</label>
            </div>
            
          </div>

          <div className="convert-form__input-container">
            <label htmlFor="convert-form__input-container__input" className="convert-form__input-container__label">
              <input type="text" className="convert-form__input-container__input" placeholder="Enter the link to the media"/>
            </label>
            <button className="button button_color_red">CONVERT to mp3</button>
          </div>

          <div className="convert-form__notice">
              By using our service you are accepting our <a className="convert-form__notice__link" href="#">Terms of Use</a>
          </div>
        </div>
        
      
      </div>
    </header>
    )
  }
}


export default Header