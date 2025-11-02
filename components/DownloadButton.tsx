'use client'

import React from 'react';
import { Button } from "@/components/ui/moving-border";

interface DownloadButtonProps {
  filePath: string; // Path to the PDF file in the public folder
  fileName: string; // Desired file name when downloaded
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ filePath, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath; // Access the file from the public folder
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="m-15 flex justify-center text-center">
    <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800 hover:bg-slate-800 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
        onClick={handleDownload}
      >
        Download Resume
      </Button>
    </div>
  );
};

export default DownloadButton;
