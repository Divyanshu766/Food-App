const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "I'm H1"),
  React.createElement("h2", {}, "I'm H2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
