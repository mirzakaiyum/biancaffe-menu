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
