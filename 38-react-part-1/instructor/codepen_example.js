// Note the use of destructuring in the props argument
const Greeting = ({firstName, lastName}) => {
  return <h2 className="greetings">Hello {firstName} {lastName}!</h2>
};

const App = () => {
  // Can Use React.Fragment
  return (
    <div>
    <Greeting firstName="Grace" lastName="Hopper" />
    <Greeting firstName="Alan" lastName="Turing" />
    </div>
  );
};

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
