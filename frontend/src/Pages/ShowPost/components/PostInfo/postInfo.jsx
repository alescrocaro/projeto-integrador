import { Box, Card, Divider } from '@mui/material';
import DescriptionSection from './Description/descriptionSection';
import LocationSection from './Location/locationSection';
import SpecimenSection from './Specimen/specimenSection';
import TagsSection from './TagsSection/tagsSection';

const PostInfo = ({ post }) => {
  if (!post) return 'Carregando...';

  return (
    <Card
      sx={{
        width: '100%',
        height: 'fit-content',
        backgroundColor: '#f0f0f0',
        display: 'grid',
        marginBottom: '5px',
      }}
    >
      <SpecimenSection post={post} />

      <Divider variant="middle" />

      <DescriptionSection text={post.description} />

      <Divider variant="middle" />

      <TagsSection tags={post.tags} />
    </Card>
  );
};

export default PostInfo;
