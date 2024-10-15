import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// route imports
import The_Routes from "./routes/The_Routes";
import Error_Page from './routes/Error_Page';
import App from './components/App'


// Page Routing
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error_Page />,
    children: The_Routes, 
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
