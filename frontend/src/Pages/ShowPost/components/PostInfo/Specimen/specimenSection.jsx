import { Box } from '@mui/material';
import { Subtitulo } from '../../../style';
import ImageSlider from '../../imageSlider';
import Taxonomy from './Taxonomy/taxonomy';

const SpecimenSection = ({ post, images, setImages }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '.5rem',
        padding: '1rem',
      }}
    >
      <Subtitulo>ESPÉCIME:</Subtitulo>
      <ImageSlider
        images={images}
        setImages={setImages}
        postOwnerId={post.userId}
        postId={post.id}
      />
      <Taxonomy post={post} />
    </Box>
  );
};

export default SpecimenSection;
