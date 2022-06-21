import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular'

export default function ButtonSpecial({ completed, completedTasks, buttonRef }) {

  return (
    <button ref={buttonRef} className={completed ? 'btn--completed' : 'btn btn--special'} onClick={() => completedTasks()}>
      <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faCheckCircle} />
    </button>
  )
}
