import React from "react";
import useModal from "./UseModal";
import Modal from "./Modal";

export default function TargetModal() {
  const {
    isShowing: isTargetFormShowed,
    toggle: toggleTargetForm
  } = useModal();

  return (
    <>
      <div className="Target">
        <button className="modal-toggle" onClick={toggleTargetForm}>
          Target
        </button>
       

        <Modal
          isShowing={isTargetFormShowed}
          hide={toggleTargetForm}
          title="Set target"
        >
          <form>
            <div className="form-group">
                <input type="text" pattern="[0-9]*" inputmode="numeric" />            
            </div>
            
            <div className="form-group">
              <input type="submit" value="Save" />
            </div>
          </form>
        </Modal>
      </div>

      <style jsx="true">{`        .

        button.modal-toggle,
        input[type="submit"] {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:not(:first-child) {
          margin-left: 10px;
        }

        .form-group {
          margin-top: 10px;
        }

        input[type="text"],
        input[type="password"],
        input[type="email"] {
          box-sizing: border-box;
          width: 100%;
          padding: 0.5rem 0.7rem;
        }
      `}</style>
    </>
  );
}