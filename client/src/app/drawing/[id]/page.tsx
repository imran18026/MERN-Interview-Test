/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useParams, useRouter as useNextRouter } from "next/navigation";
import { fetchDrawingById, updateDrawing } from "@/api/api";

const DrawingPage = () => {
  const params = useParams();
  const router = useNextRouter();
  const canvasRef = useRef<CanvasDraw | null>(null);
  const [drawing, setDrawing] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDrawing();
  }, []);

  const loadDrawing = async () => {
    try {
      const response = await fetchDrawingById(params.id as string);
      const drawingData = response.data.data.shapes;

      if (drawingData) {
        const parsedDrawing = JSON.parse(drawingData);
        setDrawing(parsedDrawing);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching drawing:", error);
    }
  };

  useEffect(() => {
    if (!loading && canvasRef.current && drawing) {
      canvasRef.current.loadSaveData(JSON.stringify(drawing), false);
    }
  }, [loading, drawing]);

  const handleSave = async () => {
    const drawingData = canvasRef.current?.getSaveData();
    try {
      await updateDrawing(params.id as string, { shapes: drawingData });
      alert("Drawing updated successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error updating drawing:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">
        Drawing ID: {params.id}
      </h1>
      <div className="mt-5 flex justify-center">
        <CanvasDraw
          ref={canvasRef}
          brushColor={drawing?.lines?.[0]?.brushColor || "#000"}
          brushRadius={drawing?.lines?.[0]?.brushRadius || 2}
          lazyRadius={0}
          canvasWidth={drawing?.width || 400}
          canvasHeight={drawing?.height || 400}
        />
      </div>
      <div className="my-5 flex justify-center gap-5">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-5 rounded py-2"
        >
          Update Drawing
        </button>
        <button
          onClick={() => router.push("/")}
          className="bg-green-500 text-white px-5 rounded py-2"
        >
          Back to All Drawings
        </button>
      </div>
    </div>
  );
};

export default DrawingPage;
