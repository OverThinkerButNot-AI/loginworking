import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../Component/MainLayout";
import Home from "../pages/Home";
import Admin from "../admin/Admin";

const TheRouter = () => {
  return (
    <Routes>
      
      <Route path="/" element={<MainLayout />}>
        <Route path="Home" element={<Home />}></Route>
        <Route path="SignUp" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route index element={<Home />}></Route>
      </Route>
      {/* <Route element={<ProtectedRouteUser />}>
      <Route path="defnotadmin" element={<Admin />}></Route>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/tour-history" element={<TourRequestList />} />
        <Route path="/tours/:tourId" element={<TourRequestDetail />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Route> */}
    </Routes>
  );
};

export default TheRouter;
