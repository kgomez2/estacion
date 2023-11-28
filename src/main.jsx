import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/*

TODO (Done): Remove unused files from the project

TODO (Done): Improve login form design
https://tailwindui.com/components/application-ui/forms/sign-in-forms

TODO (Done): Create a Loader when the session is getting fetched
https://tailwindcss.com/docs/animation

TODO (Done): Create a Dashboard
https://tailwindui.com/components/application-ui/application-shells/stacked

TODO (WIP): Create a Table component to retrieve all entries from the DB
https://tailwindui.com/components/application-ui/lists/tables

TODO: Use React Context to share the session between components?
Maybe use useContext to share the session. 

TODO: Create a Map component to show the location of the sensor nodes
Use https://react-leaflet.js.org/ which uses OpenStreetMap to avoid Google Maps

TODO: Use TensorFlow.js to create a linear regression from measurements
https://www.tensorflow.org/js?hl=es-419

*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App />
 </React.StrictMode>
);
