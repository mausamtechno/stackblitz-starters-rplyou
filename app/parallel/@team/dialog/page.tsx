"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Dialog = () => {
  const { push } = useRouter();
  const onConfirm = () => {
    push("/parallel");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-4">
        <h2 className="text-xl font-semibold mb-4">This is dialog title</h2>
        <p className="mb-4">This is dialog content</p>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onConfirm}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
