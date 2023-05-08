import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {moviesItem} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <img
            src={moviesItem.thumbnailUrl}
            alt="thumbnail"
            className="pop-img"
          />
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="btn"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size={20} color=" #231f20" />
            </button>
            <div className="movie-container">
              <ReactPlayer url={moviesItem.videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
