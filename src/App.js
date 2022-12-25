import "./App.css";
import TasklistComponent from "./components/container/TaskListComponent";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TasklistComponent /> */}
        {/* <Ejemplo1 /> */}
        {/* <MiComponenteConContexto /> */}
        <Ejemplo4 nombre="Pablo">
          {/* Todo lo que hay aqui, es tratado como props.children */}
          <h3>Contenido del prop.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
