import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")!);

function MapApplication() {
  return (
    <>
      <header>
        <h1>Map Application</h1>
      </header>
      <nav>Actions</nav>
      <div>Here is a map</div>
    </>
  );
}

root.render(<MapApplication />);
