import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/docs/NGUYEN_KIEU_MY.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="resume-section">
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document file={pdf} loading={<p className="loading-text">Loading CV...</p>}>
          <Page 
            pageNumber={1} 
            width={Math.min(width * 0.8, 900)} 
            renderTextLayer={false} 
            renderAnnotationLayer={false} 
          />
        </Document>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </div>
  );
}

export default Resume;
