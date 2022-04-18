import * as React from "react";
import Button from '@mui/material/Button';
import { CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";

function ButtonComponent(props) {
    const {label, handleSubmit, disabled, submitting} = props;
  return (
    <Button disabled={disabled} type="submit" onClick={()=> handleSubmit()} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
     {submitting ? <CircularProgress size={24} />  : label}
    </Button>
  );
}

ButtonComponent.propTypes = {
    handleSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    submitting: PropTypes.bool
  };
  ButtonComponent.defaultProps = {
    handleSubmit: () => null,
    label: '',
    disabled: false,
    submitting: false,
  };
  
export default ButtonComponent;
