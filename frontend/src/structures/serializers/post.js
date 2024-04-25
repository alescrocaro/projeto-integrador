import { capitalizeFirstLetter } from '../../utils/functions';

export const deSerializePost = data => {
  return {
    ...data,
    kingdom: capitalizeFirstLetter(data.kingdom),
    phylum: capitalizeFirstLetter(data.phylum),
    className: capitalizeFirstLetter(data.className),
    order: capitalizeFirstLetter(data.order),
    family: capitalizeFirstLetter(data.family),
    genus: capitalizeFirstLetter(data.genus),
    specie: capitalizeFirstLetter(data.specie),
  };
};

export const serializePost = data => {
  return {
    title: data.title,
  };
};

export const deSerializePostImage = data => {
  return {
    id: data.id,
    url: data.url,
    postId: data.post_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};
