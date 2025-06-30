import React, { useState, useEffect } from 'react';
import '../css/LivePreview.css';

const LivePreview = ({ title, url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Prevent scrolling when expanded
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    // Retry loading a few times in case of temporary network issues
    if (retryCount < 3) {
      setRetryCount(retryCount + 1);
      setIsLoading(true);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {isExpanded && (
        <div className="overlay" onClick={toggleExpand}>
          <button className="close-overlay-btn" onClick={toggleExpand}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
      <div className={`live-preview-container ${isExpanded ? 'expanded' : ''}`}>
        <div className="preview-header">
          <h3>{title}</h3>
          <div className="preview-controls">
            <a href={url} target="_blank" rel="noopener noreferrer" className="open-btn">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <button className="expand-btn" onClick={toggleExpand}>
              {isExpanded ? (
                <i className="fas fa-compress-alt"></i>
              ) : (
                <i className="fas fa-expand-alt"></i>
              )}
            </button>
          </div>
        </div>

        <div className="iframe-container">
          {isLoading && <div className="loading-spinner"></div>}
          <iframe
            src={url}
            title={title}
            className={`preview-iframe ${isLoading ? 'loading' : 'loaded'}`}
            onLoad={handleLoad}
            onError={handleError}
            sandbox="allow-scripts allow-same-origin allow-forms"
          ></iframe>
        </div>

        <div className="preview-footer">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="visit-site-btn"
          >
            Visit Live Site
          </a>
        </div>      </div>
    </>
  );
};

export default LivePreview;
