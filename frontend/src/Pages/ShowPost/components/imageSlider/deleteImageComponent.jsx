import DeleteIcon from '@mui/icons-material/Delete';
import { Popconfirm } from 'antd';
import PostController from '../../../../structures/controllers/post';

const DeleteImageComponent = ({
  imageId,
  isDisabled,
  setImages,
  customStyle,
  setIsLoading,
  setCurrentImage,
}) => {
  const handleDeleteImage = () => {
    setIsLoading(true);
    PostController.deletePostImage({ imageId })
      .then(() => {
        setImages(prevImages =>
          prevImages.filter(image => image.id !== imageId)
        );
        setCurrentImage(prevCurrentImage => {
          if (prevCurrentImage > 0) {
            return prevCurrentImage - 1;
          }
          return 0;
        });
      })
      .catch(error => {
        alert('ERRO ao remover imagem: ', error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{
        backgroundColor: isDisabled ? 'rgba(0, 0, 0, 0.12)' : 'white',
        color: isDisabled ? 'rgba(0, 0, 0, 0.26)' : 'black',
        pointerEvents: 'auto',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        padding: 4,
        borderRadius: 4,
        ...customStyle,
      }}
    >
      <Popconfirm
        title="Tem certeza que deseja excluir? essa ação é irreversível"
        okText="Sim"
        cancelText="Cancelar"
        onConfirm={handleDeleteImage}
        disabled={isDisabled}
      >
        <DeleteIcon />
      </Popconfirm>
    </div>
  );
};

export default DeleteImageComponent;
