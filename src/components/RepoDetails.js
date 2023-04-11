import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import banner from "../assets/images/banner.png";
import { HiOutlineLocationMarker } from "react-icons/hi";

function RepoDetails({ user }) {
  const { id } = useParams();

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/repositories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, [id]);
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-center items-center w-full">
        <div className="bg-white rounded-3xl p-4 shadow-xl md:w-2/3">
          <div className="relative">
            <img
              className="rounded-xl h-[336] w-[300] md:h-[300px] md:w-[1000px]"
              src={banner}
              alt="banner"
            />
            <div className="avatar absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2">
                <img src={user.avatar_url} alt="user-avatar" />
              </div>
            </div>
            <div className="flex justify-center">
              <p className="absolute bottom-12 md:bottom-20 px-2 text-2xl mb-1 text-white font-bold">
                {user.name}
              </p>
              <p className="absolute bottom-9 md:bottom-14 px-2 text-sm mb-1 text-gray-100 font-bold">
                @{user.login}
              </p>
              <p className="absolute bottom-4 md:bottom-8 px-2 mb-1 text-sm text-gray-100 font-bold">
                <span className="flex justify-center items-center">
                  <HiOutlineLocationMarker className="mr-1" /> {user.location}
                </span>
              </p>
              <p className="absolute bottom-1 md:bottom-2 text-sm px-4 text-center text-gray-100">
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
              <p className="text-sm font-medium text-gray-600">repositories</p>
            </Link>
            <div className="flex flex-col items-center justify-center mx-5">
              <p className="text-xl font-bold">{user.public_gists}</p>
              <p className="text-sm font-medium text-gray-600">gist</p>
            </div>
            <Link
              to="https://github.com/brynary"
              target="_blank"
              className="flex flex-col items-center justify-center mx-5"
            >
              <p className="text-xl font-bold">{user.followers}</p>
              <p className="text-sm font-medium text-gray-600">followers</p>
            </Link>
            <Link
              to="https://github.com/brynary"
              target="_blank"
              className="flex flex-col items-center justify-center mr-2"
            >
              <p className="text-xl font-bold">{user.following}</p>
              <p className="text-sm font-medium text-gray-600">following</p>
            </Link>
          </div>
          <div className="px-4">
            <h1 className="font-bold text-2xl text-start py-3">
              Repo Name : {repos?.full_name}
            </h1>
            <p className="text-md py-1">Descriptioin : {repos?.description}</p>
            <p className="text-md py-1">
              Default Branch : {repos?.default_branch}
            </p>
            <p className="text-md py-1">Language : {repos?.language}</p>
            <p className="text-md py-1">Visibility : {repos?.visibility}</p>
            <p className="text-md py-1">Watch : {repos?.watchers_count}</p>
          </div>
          <div className="flex md:flex-row flex-col py-4 px-4">
            <Link to={repos?.html_url} target="_blank">
              <button
                role="button"
                className="bg-sky-400 w-60 px-4 font-semibold py-1 rounded-lg mt-5"
                type=""
              >
                View Repo On Github
              </button>
            </Link>
            <Link to={-1}>
              <button
                role="button"
                className="bg-gray-500 w-60 md:mx-10 text-white px-4 font-semibold py-1 rounded-lg mt-5"
                type=""
              >
                Back to repo Gallary
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoDetails;
