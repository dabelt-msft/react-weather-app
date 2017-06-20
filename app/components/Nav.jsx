var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
      <div>
          <h2>Nav Component</h2>
          {/*once used Link instead of indexLink but changed because nesting affected activeStyle*/}
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    )
}

module.exports = Nav;
