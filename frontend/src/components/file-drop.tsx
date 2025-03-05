import * as React from "react";
import { Plus, X } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { cn } from "@/lib/utils";

interface FileDropModel {
  onFileSelect: (file: File | null) => void;
}

export const FileDrop: React.FC<FileDropModel> = ({ onFileSelect }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        // Check if any files were dropped
        const droppedFile = acceptedFiles[0];

        setFile(droppedFile);
        setPreview(URL.createObjectURL(droppedFile));
        onFileSelect(droppedFile); // Pass the File object to the parent
      } else {
        setFile(null);
        setPreview(null);
        onFileSelect(null);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    }, // Directly handle accepted file types here
  });

  const handleDelete = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      setFile(null);
      setPreview(null);
      onFileSelect(null);
    },
    [onFileSelect]
  );

  return (
    <div>
      <div className="relative w-20">
        <div
          {...getRootProps()}
          className={cn(
            "h-20 w-20 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer overflow-hidden mb-2",
            {
              "border-blue-500": isDragActive,
            }
          )}
        >
          <input {...getInputProps()} className="hidden" id="fileInput" />

          {preview ? (
            <>
              <img
                src={preview || "/placeholder.svg"}
                alt="File preview"
                className="w-full h-full object-cover"
              />

              <button
                className="absolute -top-1 -right-2 bg-gray-500 text-white rounded-full p-1 hover:bg-gray-600 transition-colors shadow-md"
                onClick={handleDelete}
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </>
          ) : (
            <Plus className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </div>

      <div className="text-base file:bg-transparent file:text-sm file:font-medium file:text-foreground text-muted-foreground md:text-sm py-1">
        {file ? file.name : "Drag and drop or click to upload"}
      </div>
    </div>
  );
};
