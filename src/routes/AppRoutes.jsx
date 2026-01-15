import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/Landing";
import Game from "../pages/Game";
import Result from "../pages/Result";
import Tag from "../components/tag";

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Landing/> <Tag/></>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/result" element={<><Result/> <Tag/></>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;