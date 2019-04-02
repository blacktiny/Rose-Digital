import React from 'react'
import './style.scss'

export default ({ url, src }) => (
  <a href={url} className='item'>
    <img className='item' src={src} alt='img' />
  </a>
)
