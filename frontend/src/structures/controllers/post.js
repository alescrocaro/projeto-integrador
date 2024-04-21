import { api } from '../../services/api';
import postQueries from '../queries/post';
import { serializePost } from '../serializers/post';

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
        .delete(`deletePostImage/${imageId}`)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          return reject(error);
        });
    });
  };
}

export default PostController;
