const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" }, // - 2
    "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
// line number 2 ie the object is used to give attributes to your element "heading" in this case
// <h1 id="heading" xyz="abc">Hello World from React!</h1>