/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAllDrawings, deleteDrawing } from "@/api/api";

const HomePage = () => {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    loadDrawings();
  }, []);

  const loadDrawings = async () => {
    try {
      const response = await fetchAllDrawings();
      setDrawings(response.data.data);
    } catch (error) {
      console.error("Error fetching drawings:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDrawing(id);
      loadDrawings(); // Reload after delete
    } catch (error) {
      console.error("Error deleting drawing:", error);
    }
  };
  console.log(drawings);

  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-2xl font-bold text-center">All Drawings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {drawings.map((drawing: any) => (
          <div
            key={drawing._id}
            className="border border-gray-300 rounded p-5 bg-green-400"
          >
            <h2 className="text-lg">Drawing ID: {drawing._id}</h2>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded w-1/2">
                <Link href={`/drawing/${drawing._id}`}>View Drawing</Link>
              </button>
              <button
                onClick={() => handleDelete(drawing._id)}
                className="bg-red-500 text-white px-3 py-1 mt-2 rounded w-1/2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
