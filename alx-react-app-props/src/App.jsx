import React from "react";
import UserContext from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";

function App() {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
