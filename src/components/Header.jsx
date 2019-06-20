import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startLogout as logoutAction } from '../actions/auth'


const propTypes = {
  startLogout: PropTypes.func.isRequired
}

export function Header({ startLogout }) {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Boilerplate</h1>
          </Link>
          <button
            className="button button--link"
            type="button"
            onClick={startLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = propTypes

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(logoutAction())
})

export default connect(null, mapDispatchToProps)(Header)
