var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" id='link' >Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link" id='link' >Countdown</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Made By
              <a href="http://176.32.230.22/drool.com/" target="_blank"> Laura Veee</a>
            </li>
          </ul>
        </div>
      </div>
    );
};


module.exports = Nav;
