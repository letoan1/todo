import React from 'react'
import ListItem from './ListItem'
import './style.css'

export default function List() {
  return (
	<div className="list-wrapper">
		<ListItem />
		<ListItem />
		<ListItem />
		<ListItem />
		<ListItem />
	</div>
  )
}
