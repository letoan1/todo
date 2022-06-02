import React from 'react'
import ListContent from './ListContent'
import ButtonSpecial from '../Button/ButtonSpecial'
import ButtonRemove from '../Button/ButtonRemove'
import Line from '../Line'
import '../Button/style.css'

export default function ListItem() {
  return (
	<>
		<div className="list-item">
			<ListContent content = {'This is a first task!'} />
			<div style = {{ display: 'flex', padding: '20px 0'}}>
				<ButtonSpecial />
				<ButtonRemove />
			</div>
		</div>
		<Line />
	</>
  )
}
