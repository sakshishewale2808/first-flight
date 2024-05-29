import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home"
import Review from "./views/Review/Review"

import{
   createBrowserRouter,
   RouterProvider
}from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
   {
      path: "/",
      element: <h1>I am Home</h1>
   },
   {
      path: "/Review",
      element: <h1>I am Review</h1>
   },
   {
      path: "/Contact",
      element: <h1>I am Contact</h1>
   }
])
root.render(<RouterProvider/>)

