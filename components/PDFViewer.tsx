"use client";
import { useState, useRef, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

interface PDFViewerProps {
    section: string;
    category: string;
}

const LoadingMessage = () => (
    <div className="flex h-screen items-center justify-center">
        <div className="text-center">
            <div className="loading loading-spinner loading-lg mb-4 text-primary"></div>
            <p className="text-lg font-medium">
                Please wait, menu is loading...
            </p>
        </div>
    </div>
);
const ErrorMessage = () => (
    <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
            </svg>
            <p className="text-lg font-medium">
                Oops! Something went wrong. Please try again later.
            </p>
        </div>
    </div>
);

export const PDFViewer = ({ section, category }: PDFViewerProps) => {
    const [numPages, setNumPages] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
        }
    }, []);

    const pdfPath = `/pdfs/${section}/${category}.pdf`;

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setError(null);
    }

    if (error) {
        return (
            <div className="flex h-screen items-center justify-center">
                {error}
            </div>
        );
    }

    return (
        <div ref={containerRef} className="mx-auto max-w-3xl">
            <Document
                file={pdfPath}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<LoadingMessage />}
                error={<ErrorMessage />}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        canvasBackground="transparent"
                        pageNumber={index + 1}
                        width={width}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                ))}
            </Document>
        </div>
    );
};
