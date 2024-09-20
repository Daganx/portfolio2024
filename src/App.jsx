import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loader /> : <Profile />}</>;
}

export default App;
