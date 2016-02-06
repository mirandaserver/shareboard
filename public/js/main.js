/* global ReactDOM, React, $ */

var Main = React.createClass({
  render: function () {
    return (
           <p>React</p>
   );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('share-board')
);
