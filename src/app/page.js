"use client";

import { CiSearch } from "react-icons/ci";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?query=${query}`);
    }
    setQuery("");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      {/* Title */}
      <h1 className=" font-semibold text-gray-800 mb-6 text-center">
        Find Your Next <span className="text-blue-600">Favorite Movie</span>
      </h1>

      {/* Search Bar */}
      <section className="w-full max-w-lg">
        <form className="relative" onSubmit={handleSearchSubmit}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <CiSearch size={22} className="cursor-pointer" />
          </div>
          <input
            type="search"
            className="w-full py-4 pl-12 pr-4 rounded-full bg-white text-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search for a movie..."
            onChange={handleSearchChange}
          />
        </form>
      </section>
    </main>
  );
}
