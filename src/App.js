import Inbox from './components/Inbox'

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <Inbox />
        <div className="column letters"></div>
        <div className="column writter"></div>
      </div>
    </div>
  );
}

export default App;
