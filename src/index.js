import ReactDOM from "react-dom/client";
import{
   createBrowserRouter,
   RouterProvider
}from "react-router-dom";
import Home from "./views/Home/Home"
import Review from "./views/Review/Review"
import Contact from "./views/Contact/Contact"
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />
   },
   {
      path: "/Review",
      element: <Review />
   },
   {
      path: "/Contact",
      element: <Contact />
   }
])
root.render(<RouterProvider router={router}/>)

