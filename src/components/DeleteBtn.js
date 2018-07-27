import React from 'react';
import { Button } from "reactstrap"
const DeleteButton = props => (
    <Button className="delete-btn" {...props}>
      Delete
    </Button>
  );
  
export default DeleteButton;