import React from 'react'
import './style.scss'

export default function Panigation({ tasks, currentPage, setCurrentPage, itemsPerPage }) {
	const [pageNumberLimit, setPageNumberLimit] = React.useState(5)
	const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState(5)
	const [minPageNumberLimit, setMinPageNumberLimit] = React.useState(0)

	const pages = []

	for(let i = 1; i < Math.ceil(tasks.length / itemsPerPage); i++) {
		pages.push(i)
	}

	const handlePanigation = (e) => {
		setCurrentPage(Number(e.target.id))
	}

	const renderPageNumbers = pages.map(number => {
		if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<li
					key={number}
					id={number}
					onClick={handlePanigation}
					className={currentPage === number ? 'active' : " null"}>
					{number}
				</li>
			)
		}else{
			return null
		}
	})

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1)

		if((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
		}
	}

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1)

		if(currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
		}
	}

	let pageIncrement = null
	if(pages.length > maxPageNumberLimit) {
		pageIncrement =  <li onClick={handleNextPage}>&hellip;</li>
	}

	let pageDecrement = null
	if(pages.length > maxPageNumberLimit) {
		pageDecrement =  <li onClick={handlePrevPage}>&hellip;</li>
	}

	return (
		<div className='panigation'>
			<ul className='page-number' >
				<li onClick={handlePrevPage} disabled={currentPage === pages[0] ? true : false}>
					<button>Prev</button>
				</li>
				{pageDecrement}
				{renderPageNumbers}
				{pageIncrement}
				<li>
					<button onClick={handleNextPage} disabled={currentPage === pages[pages.length - 1] ? true : false}>Next</button>
				</li>
			</ul>
		</div>
  	)
}
