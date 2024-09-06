// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <ul className="header-container">
      <Link to="/">
        <li className="li-item">Home</li>
      </Link>
      <Link to="/about">
        <li className="li-item">About</li>
      </Link>
    </ul>
  </div>
)

export default withRouter(Header)
