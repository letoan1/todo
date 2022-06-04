import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular'

export default function ButtonSpecial() {
  return (
    <button className='btn btn--special'>
      <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faCheckCircle} />
  </button>
  )
}
