"use client";

import { useState } from "react";
import { UploadButton } from "../utils/uploadthing";

export default function MemoryBank() {
  const [sections, setSections] = useState([{ id: 1, title: "Untitled 1" }]);

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      { id: Date.now(), title: `Untitled ${prev.length + 1}` },
    ]);
  };

  const removeSection = (id: number) => {
    setSections((prev) => prev.filter((sec) => sec.id !== id));
  };

  const updateTitle = (id: number, title: string) => {
    setSections((prev) =>
      prev.map((sec) => (sec.id === id ? { ...sec, title } : sec))
    );
  };

  return (
    <div className="space-y-6 max-w-3xl w-full mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold text-center text-gray-800">Memory Bank</h1>

      {sections.map((section) => (
        <div
          key={section.id}
          className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-gray-200 shadow-lg"
        >
          <input
            value={section.title}
            onChange={(e) => updateTitle(section.id, e.target.value)}
            className="text-lg font-semibold text-gray-800 mb-4 bg-transparent focus:outline-none w-full"
          />

          <div className="bg-white/90 text-black px-4 py-3 rounded-xl shadow-sm w-full">
            <UploadButton
              endpoint="memoryUpload"
              appearance={{
                button() {
                  return "text-black bg-transparent font-medium text-sm cursor-pointer";
                },
                container: "w-full flex justify-between items-center gap-4",
                allowedContent: "hidden",
              }}
              onClientUploadComplete={(res) => {
                console.log("✅ Upload complete", res);
                window.location.reload();
              }}
              onUploadError={(err) => {
                console.error("❌ Upload error", err);
              }}
            />
          </div>

          <button
            onClick={() => removeSection(section.id)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
            title="Remove section"
          >
            ⋯
          </button>
        </div>
      ))}

      <button
        onClick={addSection}
        className="text-sm text-gray-700 hover:text-black flex items-center gap-1 mt-2"
      >
        <span className="text-lg font-bold">＋</span> Add section
      </button>

      <p className="text-center text-gray-600 mt-6">No memory fields uploaded yet.</p>
    </div>
  );
}
