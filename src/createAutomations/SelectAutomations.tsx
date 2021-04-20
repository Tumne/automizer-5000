import Header from '../common/Header';
import React from 'react';
import {
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { Automations } from '../enums/automations';
import Footer from '../common/Footer';

const useStyles = makeStyles((theme) => ({
  control: {
    width: '100%',
  },
  label: {
    margin: theme.spacing(0, 0, 1.5),
  },
}));

interface SelectAutomationsProps {
  value: string;
  onChange: (value: string) => void;
  onComplete: () => void;
}

const SelectAutomations: React.FC<SelectAutomationsProps> = ({
  value,
  onChange,
  onComplete,
}) => {
  const styles = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <Header title="Create new automation" />
      <div>
        <p>Select a template to start this automation</p>
        <FormControl className={styles.control} component="fieldset">
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              value={Automations.TAG_COMMENT_CLIP}
              control={<Radio />}
              label="Tag, comment and clip (coming soon, but prolly not)"
              disabled
            />
            <FormControlLabel
              value={Automations.MOVE_COPY}
              control={<Radio />}
              label="Move or copy recording"
            />
            <FormControlLabel
              value={Automations.EDIT_TRANSCRIPT_TEXT}
              control={<Radio />}
              label="Edit transcript text"
            />
            <FormControlLabel
              value={Automations.EDIT_TRANSCRIPT_TYPE}
              control={<Radio />}
              label="Edit transcript type"
            />
            <FormControlLabel
              value={Automations.CREATE_LABEL}
              control={<Radio />}
              label="Create a label (same, prolly not)"
              disabled
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Footer nextStep={onComplete} isPrevDisabled isNextDisabled={!value} />
    </div>
  );
};

export default SelectAutomations;
