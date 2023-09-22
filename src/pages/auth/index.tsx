import clsx from "clsx";
import FormLogin from "@/pages/auth/FormLogin";
import Footer from "@/pages/auth/Footer";
import { useTranslation } from "react-i18next";
import "./index.scss";
import React, { useState } from "react";

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: 0,
    border: 0,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    maxWidth: "fit-content",
  },
}));

const Login: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="tw-flex tw-justify-center">
      <div className="tw-relative tw-flex tw-flex-col tw-items-stretch tw-justify-between tw-items-center">
        <div className="tw-bg-primary-light tw-p-5">
          WEB HEADER
        </div>
        <div className="tw-bg-[#f2dcef] tw-p-5 tw-flex tw-flex-col tw-items-center">
          <Button variant="outlined" onClick={handleClickOpen}>
            Open login dialog
          </Button>
        </div>
        <div className="tw-bg-[#50d71e] tw-p-5 tw-bottom-0 tw-mb-[4.1526374859708195vh]">
          <Footer />
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <FormLogin />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </div>
  );
};

export default Login;
