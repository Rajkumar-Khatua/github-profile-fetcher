"use client";

import AlertDialog from "@/components/AlertDialog";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBlog,
  FaBuilding,
  FaCalendarAlt,
  FaEnvelope,
  FaGithub,
  FaMapMarker,
  FaUser,
  FaUsers,
} from "react-icons/fa";

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const fetchUserData = async (username) => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      setUserData(null);
      setLoading(false);
      setAlertMessage("is not found!");

      setShowAlert(true);

      return;
    }

    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserData(username);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-slate-100 to-red-100">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="rounded-lg p-2 border-2 border-gray-300"
        />
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
      {loading ? (
        <div className="animate-pulse mt-10 bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-6 w-full max-w-md mx-auto transform transition duration-500 hover:scale-105">
          <div className="flex justify-center items-center ">
            <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="h-3 bg-gray-300 rounded w-1/4 mx-auto"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="h-3 bg-gray-300 rounded w-full mx-auto"></div>
          </div>
        </div>
      ) : (
        userData && (
          <div className="mt-10 bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg p-6 w-full max-w-md mx-auto transform transition duration-500 hover:scale-105 flex flex-col items-center">
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={userData.avatar_url}
                alt={userData.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-center w-full">
              <h2 className="text-3xl font-semibold text-gray-800">
                {userData.name}
              </h2>
              <p className="text-gray-500 text-lg">
                <FaUser className="inline-block text-xl text-gray-500 mr-2" />
                {userData.login}
              </p>
              <div className="bg-gray-200 p-2 rounded mt-2">
                <p className="text-gray-600">
                  <FaGithub className="inline-block text-xl text-gray-500 mr-2" />
                  Public Repositories: {userData.public_repos}
                </p>
                <p className="text-gray-600">
                  <FaGithub className="inline-block text-xl text-gray-500 mr-2" />
                  Public Gists: {userData.public_gists}
                </p>
              </div>
              <p className="text-gray-600 mt-2">
                <FaCalendarAlt className="inline-block text-xl text-gray-500 mr-2" />
                Profile created at:{" "}
                {userData.created_at && !isNaN(new Date(userData.created_at))
                  ? new Date(userData.created_at).toLocaleDateString("en-CA")
                  : "N/A"}
              </p>
              <p className="text-gray-600">
                <FaMapMarker className="inline-block text-xl text-gray-500 mr-2" />
                Location: {userData.location}
              </p>
              <p className="text-gray-600">
                <FaEnvelope className="inline-block text-xl text-gray-500 mr-2" />
                Email: {userData.email || "N/A"}
              </p>
              <Link
                href={userData.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 flex items-center mt-2 justify-center"
              >
                <FaBlog className="inline-block text-xl text-gray-500 mr-2" />
                {userData.blog || "No blog provided"}
              </Link>
              <h3 className="text-xl mt-4 font-semibold">Additional Details</h3>
              <div className="bg-gray-200 p-2 rounded mt-2">
                <p className="text-gray-600">
                  <FaUsers className="inline-block text-xl text-gray-500 mr-2" />
                  Followers: {userData.followers}
                </p>
                <p className="text-gray-600">
                  <FaBuilding className="inline-block text-xl text-gray-500 mr-2" />
                  Company: {userData.company || "N/A"}
                </p>
                <p className="text-gray-600">Bio: {userData.bio}</p>
              </div>
              <Link
                href={`https://github.com/${userData.login}`}
                className="mt-4 bg-black hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-opacity duration-300"
              >
                <FaGithub className="text-2xl mr-2" />
                Visit GitHub
              </Link>
            </div>
          </div>
        )
      )}
      {showAlert && (
        <AlertDialog
          message={alertMessage}
          onClose={closeAlert}
          username={username}
        />
      )}
    </div>
  );
}
