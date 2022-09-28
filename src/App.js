import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import InlineComponent from './components/InlineComponent';
import StylesheetComponent from './components/StylesheetComponent';


function App() {
  return (
    <div className="App">
      <StylesheetComponent />
      {/* <InlineComponent />
      <Todo /> */}
    </div>
  );
}

export default App;
