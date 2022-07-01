import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Sidebar() {
    const checkRef = React.useRef();
    const closeRef = React.useRef();

    const handleClick = () => {
        checkRef.current.classList.toggle('nav-active');
        closeRef.current.classList.toggle('toggle');
    };

    return (
        <>
            <motion.aside initial={{ width: 0 }} animate={{ width: 250 }}>
                <div className="container">
                    <div className="icon__close" onClick={handleClick} ref={closeRef}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div className="sidebar" ref={checkRef}>
                        <ul className="nav-links">
                            <li>
                                <NavLink exact to="/" activeClassName="active-tab">
                                    All Tasks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="active-tab">
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/new" activeClassName="active-tab">
                                    New Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/doing" activeClassName="active-tab">
                                    Doing Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/done" activeClassName="active-tab">
                                    Done Task
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.aside>
        </>
    );
}
