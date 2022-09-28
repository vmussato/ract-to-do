import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import InlineComponent from './components/InlineComponent';
import StylesheetComponent from './components/StylesheetComponent';
import ModuleComponent from './components/ModuleComponent';


function App() {
  return (
    <div className="App">
      <ModuleComponent />
      {/* <InlineComponent />
      <Todo /> */}
    </div>
  );
}

export default App;
