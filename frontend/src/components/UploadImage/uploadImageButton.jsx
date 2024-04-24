import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from '@mui/material/Button';
import * as React from 'react';

const UploadImageButton = ({
  isDisabled = true,
  handleUploadImage,
}) => {
  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      disabled={isDisabled}
      style={{
        margin: 0,
        padding: 0,
        minWidth: 32,
        maxWidth: 32,
        minHeight: 32,
        maxHeight: 32,
        border: 'none',
      }}
    >
      <ControlPointIcon
        width={24}
        style={{
          color: 'black',
        }}
      />
      <input
        type="file"
        style={{
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(50%)',
          height: 1,
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0,
          left: 0,
          whiteSpace: 'nowrap',
          width: 1,
        }}
        onChange={handleUploadImage}
      />
    </Button>
  );
};

export default UploadImageButton;
