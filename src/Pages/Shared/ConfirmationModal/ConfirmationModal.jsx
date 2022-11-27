import React from "react";

const ConfirmationModal = ({
  headingMessage,
  message,
  closeModal,
  action,
  modalData,
  successButtonName,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{headingMessage}</h3>
          <p className="py-4">{message}</p>

          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-sm">
              {" "}
              Cancel
            </button>
            <label
              onClick={() => action(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-success btn-sm text-white"
            >
              {successButtonName}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
