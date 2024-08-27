import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section'; // Make sure you have this component for layout
import { stars } from '../assets'; // Import assets if needed

const PdfComp = () => {
    // Path to the PDF worker file
    const workerUrl = "/pdf.worker.min.js"; // Adjust if you use a different path

    return (
        <Section crosses className="!px-0 !py-10">
            <Header />
            <div className="container relative z-2">
                {/* Optional Background */}
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img
                            src={stars}
                            className="w-full"
                            alt="Stars"
                        />
                    </div>
                </div>
                {/* PDF Viewer */}
                <div className="flex justify-center">
                    <Worker workerUrl={workerUrl}>
                        <div className="w-full">
                            <Viewer fileUrl="src/assets/services/news/résumé.pdf" />
                        </div>
                    </Worker>
                </div>
            </div>
            <Footer />
        </Section>
    );
};

export default PdfComp;
