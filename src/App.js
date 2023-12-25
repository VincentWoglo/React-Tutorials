import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/main";
import PathNotFound from "./pages/404"


function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/settings" element={<Homepage />} />
          <Route path="*" element={<PathNotFound />} /> {/* 404 page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
