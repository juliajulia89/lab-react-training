function Greetings(props) {
  let greeting = '';
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    default:
      greeting = 'welcome';
  }
  return (
    <div>
      <h1>
        {greeting} {props.children}
      </h1>
    </div>
  );
}
export default Greetings;
