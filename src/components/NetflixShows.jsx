
import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <ul>
          <li>
            <Link to="/watch/the darkest minds">THE DARKEST MIND</Link>
          </li>
          <li>
            <Link to="/watch/stranger things">STRANGER THINGS</Link>
          </li>
          <li>
            <Link to="/watch/ghostbusters:afterlife">GHOSTBUSTERS:AFTERLIFE</Link>
          </li>
          
        </ul>
    </div>
  )
}
