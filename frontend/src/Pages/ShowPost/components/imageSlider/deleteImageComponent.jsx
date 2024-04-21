import { Button, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PostController from '../../../../structures/controllers/post';

const DeleteImageComponent = ({ imageId, isDisabled, setImages }) => {
  const [anchorElConfirmDelete, setAnchorElConfirmDelete] = useState(null);

  const handleDeleteImage = () => {
    PostController.deletePostImage({ imageId })
      .then(() => {
        setImages(prevImages =>
          prevImages.filter(image => image.id !== imageId)
        );
        setAnchorElConfirmDelete(null);
      })
      .catch(error => {
        console.log('err', error);
      });
  };

  return (
    <>
      <DeleteIcon
        style={{
          position: 'absolute',
          backgroundColor: isDisabled ? 'rgba(0, 0, 0, 0.12)' : 'white',
          color: isDisabled ? 'rgba(0, 0, 0, 0.26)' : 'black',
          top: 8,
          right: 8,
          padding: 4,
          borderRadius: 4,
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
          pointerEvents: 'auto',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
        onClick={event =>
          isDisabled ? null : setAnchorElConfirmDelete(event.currentTarget)
        }
      />
      <Popover
        open={!!anchorElConfirmDelete}
        anchorEl={anchorElConfirmDelete}
        onClose={() => setAnchorElConfirmDelete(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          Tem certeza que deseja excluir? essa ação é irreversível
        </Typography>
        <Button onClick={() => setAnchorElConfirmDelete(null)}>Cancelar</Button>
        <Button onClick={handleDeleteImage}>Sim</Button>
      </Popover>
    </>
  );
};

export default DeleteImageComponent;
