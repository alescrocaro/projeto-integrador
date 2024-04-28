import { Box, Chip } from '@mui/material';
import { Subtitulo } from '../../../style';

const TagsSection = ({ tags }) => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Subtitulo>TAGS:</Subtitulo>
      {tags?.map(element => (
        <Chip
          color="success"
          onClick={e => {
            e.stopPropagation();
          }}
          size="small"
          sx={{ mr: 1, mt: 1 }}
          key={element}
          label={'#' + element}
        />
      ))}
    </Box>
  );
};

export default TagsSection;
