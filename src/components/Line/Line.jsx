import React from 'react'

export default function Line({ fullWidth }) {
  return (
	<hr style={{ height: '2px', color: 'black', margin: '0 auto', backgroundColor: 'black', width: fullWidth ? '100%' : '90%'}}></hr>
  )
}
