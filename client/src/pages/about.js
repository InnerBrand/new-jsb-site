import React from 'react'
import PropTypes from 'prop-types'


// components
import Layout from '../components/Layout'
import Container from '../components/Container'

const about = props => {
    return (
        <Container>
            <Layout header>
                <h1>This is our About page</h1>
            </Layout>
        </Container>
    )
}

about.propTypes = {

}

export default about
