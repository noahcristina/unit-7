// source: https://reactjs.org/docs/add-react-to-a-website.html
'use strict';

const b = React.createElement;
//creating a component
class button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
//adding a method to the component that changes the state of the component to 
  render() {
    if (this.state.liked) {
      return 'You APPROVE this.';
    }
//adding a method to the component that changes the state of the component to true
    return b(
      'button',
      { onClick: () => this.setState({ liked: true }) },
    'CLICK TO APPROVE SITE'
    );
  }
}
//
const domContainer = document.querySelector('#button');//
const root = ReactDOM.createRoot(domContainer);//
root.render(b(button));
