import Form from "./component/form";
import Logo from "./component/logo";
import Home from "./component/home"


function App() {
  return (
    <div>
      <Logo />
      <div className="App">
        <div className="mainBoard text-center">
          <Home/>
          {/* <Form/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
