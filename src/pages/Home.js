import React from "react";
import UserCard from "../components/UserCard";

function Home({ user }) {
  return (
    <div className="container flex justify-center mx-auto py-10 md:px-4 w-100">
      <div className="md:w-2/3 min-h-screen">
        <UserCard user={user} />
      </div>
    </div>
  );
}

export default Home;
