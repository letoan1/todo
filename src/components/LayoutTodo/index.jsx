import React from 'react'
import Header from '../Header'
import Input from '../Input'
import Line from '../Line'
import ButtonAdd from '../Button/ButtonAdd'
import List from '../List'
import Panigation from '../Panigation'

export default function LayoutTodo() {
  return (
	<>
		<Header title={'TO DO LIST APPLICATION'} />
		<div className="crossbar">
		<Input />
		<ButtonAdd />
		</div>
		<Line fullWidth />
		<List />
		<Line fullWidth />
		<Panigation />
	</>
  )
}
