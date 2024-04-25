import { api } from '../../services/api';
import postQueries from '../queries/post';
import {
  deSerializePost,
  deSerializePostImage,
  serializePost,
} from '../serializers/post';

class PostController {
  static updatePost = ({ postId, data }) => {
    return new Promise((resolve, reject) => {
      return api
        .patch(`updatePost/${postId}`, {
          query: postQueries.updatePost(serializePost(data)),
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          return reject(error);
        });
    });
  };

  static deletePostImage = ({ imageId }) => {
    return new Promise((resolve, reject) => {
      return api
        .delete(`posts/image/${imageId}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  };

  static addPostImage = ({ postId, file }) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('specieImages', file);

      return api
        .post(`posts/${postId}/image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) => {
          return resolve(
            data.AddPostImage.map(image => deSerializePostImage(image))
          );
        })
        .catch(error => reject(error));
    });
  };

  static getPost = ({ id }) => {
    return new Promise((resolve, reject) => {
      return api
        .get(`posts/${id}`)
        .then(({ data }) => {
          return resolve(deSerializePost(data));
        })
        .catch(error => reject(error));
    });
  };
}

export default PostController;
