import React from 'react';
import './ModalDialog.css';

interface ModalDialogProps {
  onClose: () => void;
  content?: string;
}

const ModalDialog: React.FC<ModalDialogProps> = ({ onClose, content }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()} // Prevent overlay click from closing
      >
        <div className="modal-header">
          <h2>Modal Title</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          {content || 'This is a simple modal dialog.'}
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;