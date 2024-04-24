import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import LocationSection from '../Location/locationSection';
import SpecimenSection from '../Specimen/specimenSection';

const DetailsSection = ({ post }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(post.Images);
  }, [post.Images]);

  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        alignItems: 'start',
        marginBottom: '.15rem',
      }}
    >
      <SpecimenSection post={post} images={images} setImages={setImages} />
      <LocationSection post={post} />
    </Box>
  );
};

export default DetailsSection;
