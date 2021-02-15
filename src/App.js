import Inbox from './components/Inbox'
import Letter from './components/Letter'

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <Inbox />
        <Letter />
        <div className="column writter"></div>
      </div>
    </div>
  );
}

export default App;
