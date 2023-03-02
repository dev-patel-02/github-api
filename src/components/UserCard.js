import React, { useEffect, useState } from "react";
import universe from "../assets/images/milky-way.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function UserCard({ githubUser }) {
  const [repos, setRepos] = useState([]);
  const [searchRepo, setSearchRepo] = useState("");
  const navigate = useNavigate();
  const repositories = githubUser.repos_url;
  useEffect(() => {
    fetch(`${repositories}`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const handleDetails = (id) => {
    navigate(`/repo/${id}`);
  };


  return (
    <div className="bg-white rounded-3xl p-4 shadow-xl">
      <div className="relative">
        <img className="rounded-xl h-80 min-w-full" src={universe} alt="code" />
        <div className="avatar absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2">
            <img src={githubUser.avatar_url} />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="absolute bottom-14 px-2 text-2xl py-1 text-white font-bold">
            {githubUser.name}
          </p>
          <p className="absolute bottom-10 px-2 text-sm py-1 text-gray-200 font-bold">
            @{githubUser.login}
          </p>
          <p className="absolute bottom-6 px-2 text-sm py-1 text-gray-200 font-bold">
            <span className="flex justify-center items-center">
              <HiOutlineLocationMarker className="mr-1" /> {githubUser.location}
            </span>
          </p>
          <p className="absolute bottom-0 text-xs px-4 text-center pb-4 pt-6 text-gray-300">
            {githubUser.bio}
          </p>
        </div>
      </div>
      <div className="flex justify-center px-4 py-4">
        <div className="flex flex-col items-center justify-center ml-2">
          <p className="text-xl font-bold">{githubUser.public_repos}</p>
          <p className="text-sm font-medium text-gray-400">repositories</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-5">
          <p className="text-xl font-bold">{githubUser.public_gists}</p>
          <p className="text-sm font-medium text-gray-400">gist</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-5">
          <p className="text-xl font-bold">{githubUser.followers}</p>
          <p className="text-sm font-medium text-gray-400">followers</p>
        </div>
        <div className="flex flex-col items-center justify-center mr-2">
          <p className="text-xl font-bold">{githubUser.following}</p>
          <p className="text-sm font-medium text-gray-400">following</p>
        </div>
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
          .map((repo, i) => (
            <button key={i}
              onClick={() => handleDetails(repo.id)}
              className="border-2 rounded-lg px-4 py-2 text-center font-bold my-1 shadow-md"
            >
              {repo.name}
            </button>
          ))}
      </div>
    </div>
  );
}

export default UserCard;
