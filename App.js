import FormInput from "./Project components/FormInput";

function App() {
  return (
    <div className="App">
      <FormInput labels={"Username"} inputType={"email"} />
      <FormInput labels={"Password"} inputType={"password"} />
      <FormInput labels={"Username"} />
      <FormInput labels={"Username"} />
    </div>
  );
}

export default App;
