import { Outlet } from "react-router-dom";
import TopBar from "../components/navigation/TopBar";
import BottomNav from "../components/navigation/BottomNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <div className="pt-14 pb-14">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}