import { makeStyles, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

const useStyles = makeStyles(() => ({
  error: {
    marginTop: '2px',
    fontSize: '12px',
    color: '#FC4723',
  },
}));

interface InputTextProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'submit' | 'email';
}

const InputText: React.FC<InputTextProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
}) => {
  const styles = useStyles();
  return (
    <div>
      <Typography variant="h5">{label}</Typography>
      <Field id={name} name={name} type={type}>
        {({ field }: any) => (
          <TextField
            variant="outlined"
            fullWidth
            inputProps={{
              style: {
                padding: 10,
                fontSize: 14,
              },
            }}
            placeholder={placeholder}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage className={styles.error} component="div" name={name} />
    </div>
  );
};

export default InputText;
