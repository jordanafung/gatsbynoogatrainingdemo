import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSlogan }) => (
  <header
   /* style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }} */
  >
    <div class="header-div"
      /*style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
      added classes --joredit */
    >
      <h1 /* style={{ margin: 0 }} */>
        <Link
          to="/"
         /* style={{
            color: `white`,
            textDecoration: `none`,
          }} */
        >
          {siteTitle}: {siteSlogan}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
