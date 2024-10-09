import React from "react";
import LoaderWrapper from "./components/Loader/LoaderWrapper";
import ProfilePage from "./pages/Profile/Profile";

function App() {
  return (
    <LoaderWrapper>
      <ProfilePage />
    </LoaderWrapper>
  );
}

export default App;
