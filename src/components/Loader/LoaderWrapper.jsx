import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export default function LoaderWrapper({ children }) {
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

  // Rendre soit le loader, soit le contenu final
  return isLoading ? <Loader fadeOut={fadeOut} /> : children;
}
