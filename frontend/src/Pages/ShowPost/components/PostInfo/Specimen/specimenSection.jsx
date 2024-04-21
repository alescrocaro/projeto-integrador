import { Box } from '@mui/material';
import LocationSection from '../Location/locationSection';
import SpecimenImageSection from './specimenImageSection';
import { useEffect, useState } from 'react';

const SpecimenSection = ({ post }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(post.Images);
    console.log('post.Iamges', post.Images);
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
      <SpecimenImageSection post={post} images={images} setImages={setImages} />
      <LocationSection post={post} />
    </Box>
  );
};

export default SpecimenSection;
