var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few sample locations to try out</p>
        <ol>
          <li>
            <Link to="/?location=rio">Rio, Brazil</Link>
          </li>
          <li>
            <Link to="/?location=newYork">New York, New York</Link>
          </li>
          <li>
            <Link to="/?location=Miami">Miami, Florida</Link>
          </li>
          <li>
            <Link to="/?location=lahavana">Havana, Cuba</Link>
          </li>
        </ol>          
      </div>

    )
}

module.exports = Examples;
