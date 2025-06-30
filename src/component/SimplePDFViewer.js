import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../css/SimplePDFViewer.css';

const SimplePDFViewer = ({ pdfFile, onClose }) => {
  return (
    <div className="pdf-viewer-modal">
      <div className="pdf-viewer-container">
        <div className="pdf-viewer-header">
          <h3>Resume</h3>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="pdf-document-container">
          <iframe
            src={`${pdfFile}#toolbar=1&navpanes=1&scrollbar=1`}
            title="PDF Viewer"
            className="pdf-iframe"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default SimplePDFViewer;
