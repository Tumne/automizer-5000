import React from 'react';

interface LabelProps {
  title: string;
  value: string;
}

const Label: React.FC<LabelProps> = ({ value, title }) => {
  return value ? (
    <p>
      {title}: "{value}"
    </p>
  ) : null;
};

export default Label;
