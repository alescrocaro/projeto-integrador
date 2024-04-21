import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { Img } from '../../style';
import DeleteImageComponent from './deleteImageComponent';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

export default function ImageSlider({ images, setImages }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = images?.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  const getImagePath = imageName => {
    return `${process.env.REACT_APP_BASE_URL}/uploads/images/${imageName}`; // idk if using api url here gonna work in a prod environment
  };

  console.log('images', images);

  return (
    <Box sx={{ aspectRatio: '16/9', width: '100%', position: 'relative' }}>
      <BindKeyboardSwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((image, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div style={{ position: 'relative' }}>
                <Img
                  component="img"
                  sx={{
                    overflow: 'hidden',
                  }}
                  src={getImagePath(image.url)}
                  alt={`Image ${index} of specimen`}
                />

                <DeleteImageComponent
                  imageId={image.id}
                  isDisabled={images.length <= 1}
                  setImages={setImages}
                />
              </div>
            ) : null}
          </div>
        ))}
      </BindKeyboardSwipeableViews>
      <MobileStepper
        sx={{
          backgroundColor: 'rgba(255, 252, 252,0.8)',
          position: 'absolute',
          width: '60%',
          bottom: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
