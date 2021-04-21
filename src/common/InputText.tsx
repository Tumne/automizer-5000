import { TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface InputTextProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

const InputText: React.FC<InputTextProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
}) => {
  return (
    <div>
      <Typography variant="h5">{label}</Typography>
      <Field id={name} name={name} type={type}>
        {({ field }: any) => (
          <TextField
            variant="outlined"
            fullWidth
            placeholder={placeholder}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage className="error" component="div" name={name} />
    </div>
  );
};

export default InputText;
