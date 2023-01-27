import React from "react";
import { Modal } from "@mui/material";
import { DonationForm } from "./DonationForm";

const DonationModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <DonationForm handleClose={handleClose} />
      </>
    </Modal>
  );
};

export default DonationModal;
