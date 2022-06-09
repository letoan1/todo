import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/fontawesome-free-solid'
import './style.scss'

export default function ButtonAdd({ handleAdd, isEdit, handleUpdate }) {

  return (
	  <button
      className="btn btn--add"
      onClick=
      {isEdit === false ? handleAdd : handleUpdate}
      >
      {isEdit === false ? '+' : <FontAwesomeIcon style={{cursor: 'pointer', fontSize: '20px', margin: '8px 14px', color: '#c2db1a'}} icon={faCheck} /> }
    </button>
  )
}
