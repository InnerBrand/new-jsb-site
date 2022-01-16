import React from 'react'
import PropTypes from 'prop-types'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

// Styles
import '../styles/global/index.scss'
import { siteContainer } from './layout.scss'

const Layout = (props) => {
    console.log(props)

    const {children, header, footer} = props

    return (
        <div className={siteContainer}>
            {header && <Header/> }
            {children}
            {footer && <Footer/> }
        </div>
    )
}

Layout.propTypes = {
    header: PropTypes.bool.isRequired
}

export default Layout
