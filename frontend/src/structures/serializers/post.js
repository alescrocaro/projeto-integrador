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
