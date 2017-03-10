import AwesomeComponent from '../components/AwesomeComponent.jsx';
import style from '../scss/main.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}
