'use client'
import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

interface CategoryParams {
  params: {
    section: string;
    category: string;
  }
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const Category = ({ params }: CategoryParams) => {
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const pdfPath = `/pdfs/${params.section}/${params.category}.pdf`;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  if (error) {
    return <div className="flex h-screen items-center justify-center">{error}</div>;
  }

  return (
    <div className="flex h-screen w-full">
      <Document 
        file={pdfPath} 
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={window.innerWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ),
        )}
      </Document>
    </div>
  );
};

export default Category;