function MyComponent1() {
  return <MyComponent2 />;
}
function MyComponent2() {
  return <MyComponent3 />;
}
function MyComponent3() {
  return <div>Component ssasa3</div>;
}

function MyComponent() {
  return (
    <div id="components">
      <MyComponent1 />
    </div>
  );
}
ReactDOM.render(<MyComponent />, document.querySelector("#app"));
