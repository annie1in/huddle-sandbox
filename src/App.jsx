import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/navigation/TopBar";
import BottomNav from "./components/navigation/BottomNav";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import StudySpotDiscovery from "./pages/study-spots/StudySpotDiscovery";
import StudySpotInfo from "./pages/study-spots/StudySpotInfo";
import StudySessionLog from "./pages/study-spots/StudySessionLog";
import StudyGroupDiscovery from "./pages/study-groups/StudyGroupDiscovery";
import StudyGroupInfo from "./pages/study-groups/StudyGroupInfo";
import StudyGroupCreate from "./pages/study-groups/StudyGroupCreate";
import Insights from "./pages/Insights";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/study-spots" element={<StudySpotDiscovery />} />
          <Route path="/study-spots/info" element={<StudySpotInfo />} />
          <Route path="/study-spots/log" element={<StudySessionLog />} />
          <Route path="/study-groups" element={<StudyGroupDiscovery />} />
          <Route path="/study-groups/info" element={<StudyGroupInfo />} />
          <Route path="/study-groups/create" element={<StudyGroupCreate />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

/** NOTE:
 * StudySpotInfo and StudyGroupInfo are currently STATIC ROUTES
 * We'll change them to DYNAMIC ROUTES later to display different content based on URL parameters!
 * ex: "/study-spots/:id" "/study-groups/:id"
 */



/** IGNORE: Determines when TopBar and BottomNav are shown. */

function Layout({ children }) {
  const location = useLocation();

  const noNavPages = ["/", "/signup"];   // list of paths where nav bars should be hidden
  const hideNav = noNavPages.includes(location.pathname);

  return (
    <div className="min-h-screen">
      {!hideNav && <TopBar />}
      <div className={!hideNav ? "pt-14 pb-14" : ""}>
        {children}
      </div>
      {!hideNav && <BottomNav />}
    </div>
  );
}
