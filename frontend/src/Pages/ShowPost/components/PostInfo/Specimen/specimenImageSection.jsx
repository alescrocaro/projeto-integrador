import { Box } from '@mui/material';
import StyledTable from '../../../../../components/Table';
import { Img, Subsubtitulo, Subtitulo } from '../../../style';
import ImageSlider from '../../imageSlider';
const postPlaceholderImage = require('../../../../../img/placeholder.png');

const ImagesSection = ({ images, setImages, postOwnerId }) => {
  if (images?.length) {
    return <ImageSlider images={images} setImages={setImages} postOwnerId={postOwnerId} />;
  }

  return <Img src={postPlaceholderImage} alt="img" />;
};

const SpecimenImageSection = ({ post, images, setImages }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '.5rem',
        padding: '1rem',
      }}
    >
      <Subtitulo>ESPÉCIME:</Subtitulo>

      <ImagesSection images={images} setImages={setImages} postOwnerId={post.userId} />

      <Subsubtitulo>CLASSIFICAÇÃO CIENTÍFICA:</Subsubtitulo>
      <StyledTable data={post} scientificTable />
    </Box>
  );
};

export default SpecimenImageSection;
