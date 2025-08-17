import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

// Đường dẫn file PDF (trong public/docs)
const pdfUrl = process.env.PUBLIC_URL + "/docs/NGUYEN_KIEU_MY.pdf";

// Setup worker cho pdfjs
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
      {/* Nút download trên */}
      <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
        <Button variant="primary" href={pdfUrl} target="_blank">
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* Hiển thị PDF */}
      <Row className="resume" style={{ justifyContent: "center" }}>
        <Document file={pdfUrl} loading={<p>Loading CV...</p>}>
          <Page
            pageNumber={1}
            width={Math.min(width * 0.8, 900)}
            renderTextLayer={false}          // ✅ Tắt text layer
            renderAnnotationLayer={false}    // ✅ Tắt annotation layer
          />
        </Document>
      </Row>

      {/* Nút download dưới */}
      <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
        <Button variant="primary" href={pdfUrl} target="_blank">
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </div>
  );
}

export default Resume;
