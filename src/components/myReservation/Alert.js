import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

import './alert.scss';

export default function AlertDialog(props) {
  const { cancel, cancelBtn, dialogContent } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen} startIcon={<DeleteIcon />}>
        Cancel Reservation
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialogTitle" id="alert-dialog-title">
          Cancel Reservation?
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="dialogText" id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="Button" onClick={handleClose}>Back</Button>
          <Button className="Button" color="error" onClick={() => cancel()} autoFocus>
            {cancelBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
  cancel: PropTypes.func.isRequired,
  cancelBtn: PropTypes.string.isRequired,
  dialogContent: PropTypes.string.isRequired,
};
