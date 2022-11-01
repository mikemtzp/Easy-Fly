import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './alert.scss';

export default function AlertDialog(props) {
  const { cancel } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
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
            This action cannot be undone. You will need to make a new reservation
            if you decide to recover your reservation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="Button" onClick={handleClose}>Back</Button>
          <Button className="Button" onClick={() => cancel()} autoFocus>
            Cancel Reservation
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
  cancel: PropTypes.func.isRequired,
};
