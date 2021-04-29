import Form from "./component/form";
import Logo from "./component/logo";
function App() {
  return (
    <div>
      <Logo />
      <div className="App">
        <div className="mainBoard text-center">
          <h1 className="">Bitte loggen Sie sich ein um fortzufahren</h1>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
