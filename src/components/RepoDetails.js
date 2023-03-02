import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import universe from "../assets/images/milky-way.png";
import { HiOutlineLocationMarker } from "react-icons/hi";

function RepoDetails({ githubUser }) {
  const { id } = useParams();
  const ids = parseFloat(id);
  const repositories = githubUser.repos_url;
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`${repositories}`)
      .then((res) => res.json())
      .then((data) => {
        const repoData = data.find((d) => d?.id === ids);
        setRepos(repoData);
      });
  }, []);
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid justify-center items-center w-full">
        <div className="bg-white rounded-3xl p-4 shadow-xl">
          <div className="relative">
            <img
              className="rounded-xl h-80 min-w-full"
              src={universe}
              alt="code"
            />
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
                  <HiOutlineLocationMarker className="mr-1" />{" "}
                  {githubUser.location}
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
          <div className="px-4">
            <p className="font-bold text-2xl text-start py-3">
              Repo Name : {repos?.full_name}
            </p>
            <p className="text-md py-1">Descriptioin : {repos?.description}</p>
            <p className="text-md py-1">
              Default Branch : {repos?.default_branch}
            </p>
            <p className="text-md py-1">Language : {repos?.language}</p>
            <p className="text-md py-1">Visibility : {repos?.visibility}</p>
            <p className="text-md py-1">Watch : {repos?.watchers_count}</p>
          </div>
          <div className="flex md:flex-row flex-col py-4 px-4">
            <button
              className="bg-sky-400 w-60 px-4 font-semibold py-1 rounded-lg mt-5"
              type=""
            >
              <Link to={repos?.html_url} target="_blank">
                View Repo On Github
              </Link>
            </button>
            <button
              className="bg-gray-400 w-60 md:mx-10 text-white px-4 font-semibold py-1 rounded-lg mt-5"
              type=""
            >
              <Link to={-1}>Back to repo Gallary</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoDetails;