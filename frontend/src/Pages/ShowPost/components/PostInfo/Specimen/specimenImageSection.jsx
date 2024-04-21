import { Box } from '@mui/material';
import StyledTable from '../../../../../components/Table';
import { Img, Subsubtitulo, Subtitulo } from '../../../style';
import ImageSlider from '../../imageSlider';
const postPlaceholderImage = require('../../../../../img/placeholder.png');

const ImagesSection = ({ images, setImages }) => {
  if (images?.length) {
    return <ImageSlider images={images} setImages={setImages} />;
  }

  return <Img src={postPlaceholderImage} alt="img" />;
};

const SpecimenImageSection = ({ post, images, setImages }) => {
  // TODO:
  //  - add image
  //    - OutlinedPlus icon somewhere near the image
  //      - Only post owner can see it
  //    - If there is 5 images, cant add anymore
  //  - delete image
  //    - If there is 1 image, cant delete
  //    - Trash icon on each image
  //      - Only post owner can see it
  //  - Steps to implement
  //    - Add controller
  //    - Add query
  //    - Add serializer
  //    - Add icons
  //    - Add a form submit to the icons
  //    - Call controller on page
  //      - Test request
  console.log('images', images);

  return (
    <Box
      sx={{
        display: 'grid',
        gap: '.5rem',
        padding: '1rem',
      }}
    >
      <Subtitulo>ESPÉCIME:</Subtitulo>

      <ImagesSection images={images} setImages={setImages} />

      <Subsubtitulo>CLASSIFICAÇÃO CIENTÍFICA:</Subsubtitulo>
      <StyledTable data={post} scientificTable />
    </Box>
  );
};

export default SpecimenImageSection;
