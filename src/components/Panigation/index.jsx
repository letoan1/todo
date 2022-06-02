import React from 'react'
import './style.css'

export default function Panigation() {
  return (
	<div class='panigation'>
		<button className="btn--pani" >{'<'}</button>
		<button className="btn--pani active" >1</button>
		<button className="btn--pani" >2</button>
		<button className="btn--pani" >3</button>
		<button className="btn--pani" >{'>'}</button>
	</div>
  )
}
