import Addtodo from "./Component/Addtodo";
import Todos from "./Component/Todos";

function App() {
  return (
    <>
      <div className="w-1/2 mx-auto">
        <h1 className="text-4xl">hello redux toolkit</h1>
        <Addtodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
