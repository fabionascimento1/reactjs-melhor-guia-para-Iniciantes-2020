const sobrenoneContext = React.createContext("sobrenone");

function MyComponent1() {
  return (
    <sobrenoneContext.Provider value="fabio Nascimento 123">
      <MyComponent2 />
    </sobrenoneContext.Provider>
  );
}
function MyComponent2() {
  return (
    <sobrenoneContext.Consumer>
      {(sobreN) => <div>{sobreN}</div>}
    </sobrenoneContext.Consumer>
  );
}

function MyComponent() {
  return (
    <div id="components">
      <MyComponent1 />
    </div>
  );
}
ReactDOM.render(<MyComponent />, document.querySelector("#app"));
