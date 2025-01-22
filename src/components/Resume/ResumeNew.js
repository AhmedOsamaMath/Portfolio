import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const previousPage = () => {
    setPageNumber(pageNumber <= 1 ? 1 : pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber >= numPages ? numPages : pageNumber + 1);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Button
              variant="primary"
              onClick={previousPage}
              disabled={pageNumber <= 1}
              style={{ borderRadius: "50%", width: "40px", height: "40px", padding: "0" }}
            >
              <BsArrowLeftCircle />
            </Button>
            
            <span className="mx-2">
              Page {pageNumber} of {numPages}
            </span>

            <Button
              variant="primary"
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              style={{ borderRadius: "50%", width: "40px", height: "40px", padding: "0" }}
            >
              <BsArrowRightCircle />
            </Button>
          </div>
        </Row>

        <Row className="resume">
          <Document 
            file={pdf} 
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Button
              variant="primary"
              onClick={previousPage}
              disabled={pageNumber <= 1}
              style={{ borderRadius: "50%", width: "40px", height: "40px", padding: "0" }}
            >
              <BsArrowLeftCircle />
            </Button>
            
            <span className="mx-2">
              Page {pageNumber} of {numPages}
            </span>

            <Button
              variant="primary"
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              style={{ borderRadius: "50%", width: "40px", height: "40px", padding: "0" }}
            >
              <BsArrowRightCircle />
            </Button>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;