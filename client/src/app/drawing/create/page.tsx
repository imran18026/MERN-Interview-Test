"use client";

import { createDrawing } from "@/api/api";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

const CreateDrawingPage = () => {
  const router = useRouter();
  const canvasRef = useRef<CanvasDraw | null>(null);

  const handleSave = async () => {
    const shapes = canvasRef.current?.getSaveData();

    if (shapes?.length === 37) {
      alert("Please draw something first.");
      return;
    }

    try {
      await createDrawing({ shapes });
      alert("Drawing created successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error creating drawing:", error);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">Create New Drawing</h1>
      <div className="flex justify-center ">
        <CanvasDraw ref={canvasRef} brushColor="#000" brushRadius={1} />
      </div>
      <div className="mt-5 flex justify-center gap-5">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-5 rounded py-2"
        >
          Save Drawing
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

export default CreateDrawingPage;
