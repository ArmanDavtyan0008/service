import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignUpDialog = ({ open, onClose, handleOpenSignUp, onSignInOpen }) => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <Button variant="authentication" onClick={handleOpenSignUp}>
        <Typography variant="h6">Sign up</Typography>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <form>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField type="email" label="Email" required />
            <TextField
              type={showPass ? "text" : "password"}
              label="Password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type={showPass ? "text" : "password"}
              label="Confirm password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography>
              Already have an account?
              <Button
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSignInOpen();
                }}
              >
                {" "}
                Sign in{" "}
              </Button>
            </Typography>
            <DialogActions>
              <Button
                variant="contained"
                type="submit"
                onClick={(e) => e.preventDefault()}
              >
                Sign Up
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default SignUpDialog;
