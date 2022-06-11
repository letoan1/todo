import React from 'react'
import './style.scss'

export default function Panigation({ tasks, currentPage, limit, handleSetCurrentPage }) {
	const endPage = tasks.length / limit

	return (
		<div className='panigation-wrapper'>
			{currentPage !== 1 && <button className='btn' onClick={() => handleSetCurrentPage(currentPage - 1)}>{'<'}</button>}
			{currentPage - 1 > 0 && <button className='btn' onClick={() => handleSetCurrentPage(currentPage - 1)}>{currentPage - 1}</button>}
			<button className='btn btn--active'>{currentPage}</button>
			{currentPage < endPage && <button className='btn' onClick={() => handleSetCurrentPage(currentPage + 1)}>{currentPage + 1}</button>}
			{currentPage < endPage && <button className='btn' onClick={() => handleSetCurrentPage(currentPage + 1)}>{'>'}</button>}
  		</div >
	)
}
