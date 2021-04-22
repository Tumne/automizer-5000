import React from 'react';
import { Button } from '@material-ui/core';

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      type="button"
      style={{ height: '36px', boxShadow: 'none' }}
      onClick={onClick}
    >
      Edit
    </Button>
  );
};

export default EditButton;
