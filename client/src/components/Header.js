import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

// logo
import logo from '../images/jsb-logo.png'

// styles
import * as styles from "../styles/modules/Header.module.scss"


const Header = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
      }
    return (
        <header className={styles.header}>
            <nav className={styles.navBar} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}>
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                        <MdClose style={{ color: "#fff", width: "26px", height: "26px" }} />
                    ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "26px", height: "26px" }} />
                    )}
                </button>
                    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </ul>
            </nav>
            <img src={logo} className={styles.logo} />

        </header>
    )
}

export default Header