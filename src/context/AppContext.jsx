import { createContext, useContext, useState } from "react";
import { studySessions as initialSessions } from "../data/studySessions";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sessions, setSessions] = useState(initialSessions);
  const [joinedGroups, setJoinedGroups] = useState([]);

  const joinGroup = (group) => {
    setJoinedGroups((prev) => {
      if (prev.find((g) => g.id === group.id)) return prev;
      return [group, ...prev];
    });
  };

  const addSession = (session) => {
    setSessions((prev) => [{ id: prev.length + 1, ...session }, ...prev]);
  };

  return (
    <AppContext.Provider value={{ sessions, joinedGroups, joinGroup, addSession }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);