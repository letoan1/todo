import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular'


export default function ButtonRemove({ handleDelete }) {
  return (
	<button className='btn btn--remove' onClick={() => handleDelete()}>
    <FontAwesomeIcon style={{cursor: 'pointer', color: 'red'}} icon={faTrashAlt} />
  </button>
  )
}
