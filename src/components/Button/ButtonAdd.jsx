import React from 'react'
import './style.scss'

export default function ButtonAdd({ handleAdd }) {

  return (
	  <button
      className="btn btn--add"
      onClick= {handleAdd}
      onKeyDown={handleAdd}
    > +
    </button>
  )
}
