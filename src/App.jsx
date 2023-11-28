import { useState, useEffect } from "react";
import { supabase } from "./libs/supabaseClient";
import { SessionContext } from "./hooks/useSession";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <SessionContext.Provider value={{ session, setSession }}>
        {!session ? <Auth /> : <Dashboard title="Dashboard">Tabl</Dashboard>}
      </SessionContext.Provider>
    </>
  );
}

export default App;
