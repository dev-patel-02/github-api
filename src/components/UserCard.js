import React, { useEffect, useState } from "react";
import banner from "../assets/images/banner.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const [repos, setRepos] = useState([]);
  const [searchRepo, setSearchRepo] = useState("");
  const navigate = useNavigate();
  const repositories = user?.repos_url;

  useEffect(() => {
    fetch(`${repositories}`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);
  const handleDetails = (id) => {
    navigate(`/repo/${id}`);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-1">
      <div className="relative">
        <img className="rounded-xl h-80 min-w-full" src={banner} alt="code" />
        <div className="avatar absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2">
            <img src={user.avatar_url} />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="absolute bottom-14 px-2 text-2xl mb-1 text-white font-bold">
            {user.name}
          </p>
          <p className="absolute bottom-10 px-2 text-sm mb-1 text-gray-200 font-bold">
            @{user.login}
          </p>
          <p className="absolute bottom-4 px-2 mb-1 text-sm text-gray-200 font-bold">
            <span className="flex justify-center items-center">
              <HiOutlineLocationMarker className="mr-1" /> {user.location}
            </span>
          </p>
          <p className="absolute bottom-0 text-xs px-4 text-center mb-1 text-gray-300">
            {user.bio}
          </p>
        </div>
      </div>
      <div className="flex justify-center px-4 py-4">
        <Link
          to="https://github.com/brynary?tab=repositories"
          target="_blank"
          className="flex flex-col items-center justify-center ml-2"
        >
          <p className="text-xl font-bold">{user.public_repos}</p>
          <p className="text-sm font-medium text-gray-400">repositories</p>
        </Link>
        <div className="flex flex-col items-center justify-center mx-5">
          <p className="text-xl font-bold">{user.public_gists}</p>
          <p className="text-sm font-medium text-gray-400">gist</p>
        </div>
        <Link
          to="https://github.com/brynary"
          target="_blank"
          className="flex flex-col items-center justify-center mx-5"
        >
          <p className="text-xl font-bold">{user.followers}</p>
          <p className="text-sm font-medium text-gray-400">followers</p>
        </Link>
        <Link
          to="https://github.com/brynary"
          target="_blank"
          className="flex flex-col items-center justify-center mr-2"
        >
          <p className="text-xl font-bold">{user.following}</p>
          <p className="text-sm font-medium text-gray-400">following</p>
        </Link>
      </div>
      <div className="pb-8 mt-2 flex justify-center">
        <input
          type="text"
          placeholder="Search By Name..."
          className="input input-bordered input-info w-full max-w-xs "
          onChange={(e) => setSearchRepo(e.target.value)}
        />
      </div>
      <p className="font-bold text-md text-center py-5">All Repositories</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-5 md:px-5 py-5">
        {repos
          ?.filter((value) => {
            if (searchRepo == "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchRepo.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          ?.map((repo, i) => (
            <button
              key={i}
              onClick={() => handleDetails(repo?.id)}
              className="border-2 rounded-lg px-4 py-2 text-center font-bold my-1 shadow-md"
            >
              {repo?.name.charAt(0).toUpperCase() + repo?.name.slice(1).replaceAll('_', ' ').replaceAll('-', ' ')}
            </button>
          ))}
      </div>
    </div>
  );
}

export default UserCard;
