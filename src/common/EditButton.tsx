import { Button } from '@material-ui/core';
import React from 'react';

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
