import React from "react";
import BaseModal from "./BaseModal";
import { AlertTriangle, Trash2 } from "lucide-react";

const DeleteModal = ({ isOpen, onClose, onDelete, recordName, identifier }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      width="max-w-md"
      title="Confirm Delete"
    >
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-50 mb-6 shadow-sm">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Are you sure?
        </h3>
        <p className="mb-8 text-gray-600">
          You are about to delete {recordName}:{" "}
          <strong className="text-gray-900">{identifier}</strong>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200/50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-5 py-2.5 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 shadow-sm transition-all duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-red-500/30 cursor-pointer"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default DeleteModal;
