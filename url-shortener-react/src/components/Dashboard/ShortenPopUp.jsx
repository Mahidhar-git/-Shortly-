import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CreateNewShorten from "./CreateNewShorten";

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="shorten-url-modal"
      aria-describedby="modal-to-create-new-shorten-url"
      closeAfterTransition
      slotProps={{
        backdrop: { timeout: 500 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 400, md: 450 },
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
          outline: "none",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Create New Shorten Form */}
        <CreateNewShorten setOpen={setOpen} refetch={refetch} />
      </Box>
    </Modal>
  );
};

export default ShortenPopUp;
