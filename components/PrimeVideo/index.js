import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionList = moviesList.filter(
    eachValue => eachValue.categoryId === 'ACTION',
  )

  const comedyList = moviesList.filter(
    eachValue => eachValue.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt=" prime video"
        className="prime-img"
      />
      <div className="list-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
