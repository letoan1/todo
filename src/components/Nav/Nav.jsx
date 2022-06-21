import React from 'react'
import HomePage from '../../pages/Home'
import ContactPage from '../../pages/Contact'
import AboutPage from '../../pages/About'
import { Routes, Route, Link } from 'react-router-dom'
import './nav.scss'

export default function Navigation() {
	return (
		<>
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</>
	);
}
