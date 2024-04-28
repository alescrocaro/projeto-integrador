import UploadImageButton from '../../../../components/UploadImage/uploadImageButton';
import { acceptedFileExtensions } from '../../../../structures/constants/file';
import PostController from '../../../../structures/controllers/post';

const AddImageComponent = ({
  postId,
  images,
  setImages,
  customStyle,
  setActiveStep,
  isDisabled = false,
  setIsLoading,
}) => {
  const handleUploadImage = e => {
    setIsLoading(true);
    const file = e.target.files[0];
    if (
      !acceptedFileExtensions.includes(file.name.split('.')[1].toLowerCase())
    ) {
      alert(
        `ERRO: Não foi possível reconhecer a extensão da imagem. As extensões permitidas são ${acceptedFileExtensions.map(
          fileExt => fileExt
        )}`
      );
      return;
    }

    PostController.addPostImage({ postId: postId, file: file })
      .then(uploadedImages => {
        setImages(prev => [...prev, ...uploadedImages]);
        setActiveStep(images.length);
      })
      .catch(error => {
        alert('ERRO ao adicionar imagem: ', error.response.data.message);
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
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        padding: 0,
        margin: 0,
        borderRadius: 4,
        ...customStyle,
      }}
    >
      <UploadImageButton
        isDisabled={isDisabled}
        handleUploadImage={handleUploadImage}
      />
    </div>
  );
};

export default AddImageComponent;
