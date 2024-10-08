import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader.jsx";
import ProfilePage from "./components/Profile/Profile.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loader fadeOut={fadeOut} /> : <ProfilePage />}</>;
}

export default App;
