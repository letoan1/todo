import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/fontawesome-free-regular'


const ButtonEdit = ({handleEdit}) => {
  return (
	  <button className='btn btn--edit' onClick={handleEdit}>
        <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faEdit} />
  	</button>
  )
}

export default ButtonEdit