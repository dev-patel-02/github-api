import React from "react";
import UserCard from "../components/UserCard";

function Home({user}) {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid justify-center items-center w-full min-h-screen">
        <UserCard user={user} />
      </div>
    </div>
  );
}

export default Home;
