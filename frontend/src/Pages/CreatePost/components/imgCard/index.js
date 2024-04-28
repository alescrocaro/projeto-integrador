import DeleteIcon from '@mui/icons-material/Delete';
import { Card, Typography } from '@mui/material';

export function ImgCard({ id, imgName, handleOnDelete }) {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1,
        margin: '5px 0',
        '&:hover': {
          backgroundColor: '#fbfbfb',
        },
      }}
    >
      <Typography variant="body1">{imgName}</Typography>

      <DeleteIcon
        onClick={() => {
          handleOnDelete(id);
        }}
        sx={{
          cursor: 'pointer',
          borderLeft: '1px solid #ccc',
          paddingLeft: '10px',
        }}
      />
    </Card>
  );
}
