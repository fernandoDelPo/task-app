import './assets/stylesheets/App.css';
import ThingsToDo from './components/ThingsToDo';

function App() {
  return (
    <div className='App'>
      <div className='title-container'>
        <h1 className='title'>Task App</h1>
      </div>
      <div className='task-main-list'>
        <h1>My tasks</h1>
        <ThingsToDo />  

      </div>
      
    </div>
  );
}

export default App;
