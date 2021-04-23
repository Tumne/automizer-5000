import React from 'react';
import { withStyles } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import {
  FileCopyOutlined,
  DescriptionOutlined,
  VideocamOutlined,
  LocalOfferOutlined,
  LabelOutlined,
} from '@material-ui/icons';

import Content from '../common/Content';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { Automations } from '../enums/automations';

const StyledToggleButtonGroup = withStyles((theme) => ({
  root: {
    width: '100%',
  },
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

const StyledToggleButton = withStyles(() => ({
  root: {
    '&:not(:first-child)': {
      border: '1px solid lightgrey',
    },
    '&:hover': {
      backgroundColor: '#F3F5F7',
    },
    border: '1px solid lightgrey',
  },
  selected: {
    '&:not(:first-child)': {
      background: '#F0FAFE',
    },
    '&:hover': {
      backgroundColor: '#F0FAFE !important',
    },
    background: '#F0FAFE',
  },
  label: {
    justifyContent: 'space-between',
  },
}))(ToggleButton);

interface SelectAutomationProps {
  value: string;
  onChange: (value: string) => void;
  onComplete: () => void;
}

const SelectAutomation: React.FC<SelectAutomationProps> = ({
  value,
  onChange,
  onComplete,
}) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) => {
    onChange(value);
  };

  return (
    <div>
      <Header title="Create new automation" />
      <div>
        <p>Select a template to start this automation</p>
        <StyledToggleButtonGroup
          size="small"
          value={value}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
          orientation="vertical"
        >
          <StyledToggleButton value={Automations.TAG_COMMENT_CLIP} disabled>
            <Content
              value={value}
              automationtype={Automations.TAG_COMMENT_CLIP}
              SVG={LocalOfferOutlined}
              title="Tag, comment and clip"
              description="Coming soon, but prolly not"
            />
          </StyledToggleButton>
          <StyledToggleButton value={Automations.MOVE_COPY}>
            <Content
              value={value}
              automationtype={Automations.MOVE_COPY}
              SVG={FileCopyOutlined}
              title="Move or copy recording"
              description="Command + C, Command + V"
            />
          </StyledToggleButton>
          <StyledToggleButton value={Automations.EDIT_TRANSCRIPT_TEXT}>
            <Content
              value={value}
              automationtype={Automations.EDIT_TRANSCRIPT_TEXT}
              SVG={DescriptionOutlined}
              title="Edit transcript text"
              description="To text or not to text"
            />
          </StyledToggleButton>
          <StyledToggleButton value={Automations.EDIT_TRANSCRIPT_TYPE}>
            <Content
              value={value}
              automationtype={Automations.EDIT_TRANSCRIPT_TYPE}
              SVG={VideocamOutlined}
              title="Edit transcript type"
              description="Sorry you're not my type"
            />
          </StyledToggleButton>
          <StyledToggleButton value={Automations.CREATE_LABEL} disabled>
            <Content
              value={value}
              automationtype={Automations.CREATE_LABEL}
              SVG={LabelOutlined}
              title="Create a label"
              description="Yeah right... create your own dang label"
            />
          </StyledToggleButton>
        </StyledToggleButtonGroup>
      </div>
      <Footer nextStep={onComplete} isPrevDisabled isNextDisabled={!value} />
    </div>
  );
};

export default SelectAutomation;
