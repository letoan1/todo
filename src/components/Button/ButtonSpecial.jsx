import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular'

export default function ButtonSpecial({ handleCompleted, index }) {

  return (
    <button className='btn btn--special' onClick={() => handleCompleted(index)}>
      <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faCheckCircle} />
    </button>
  )
}
