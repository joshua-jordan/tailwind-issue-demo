import myCVAComponent from "./myCVAComponent";

/**
 * Demo of the issue
 */

function App() {
  return (
    <div>
      <p className={myCVAComponent({ size: "sm", className: "bg-red-50" })}>
        p - 1 (working)
      </p>
      <p className={myCVAComponent({ size: "md", className: "bg-green-50" })}>
        p - 1.5 (not working / class not exist)
      </p>
      <p className={myCVAComponent({ size: "lg", className: "bg-yellow-50" })}>
        p - 2 (working)
      </p>
      <p className={myCVAComponent({ size: "xl", className: "bg-blue-50" })}>
        p - 2.5 (not working / class not exist)
      </p>
    </div>
  );
}

export default App;
