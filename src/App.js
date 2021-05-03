import Inbox from './components/Inbox'
import Letter from './components/Letter'
import Writter from './components/Writter'

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <Inbox />
        <Letter />
        <Writter />
      </div>
    </div>
  );
}

export default App;
