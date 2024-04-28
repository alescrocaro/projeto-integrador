import Formatter from "../../utils/formatter";

export const deSerializePost = data => {
  return {
    ...data,
    kingdom: Formatter.capitalizeFirstLetter(data.kingdom),
    phylum: Formatter.capitalizeFirstLetter(data.phylum),
    className: Formatter.capitalizeFirstLetter(data.className),
    order: Formatter.capitalizeFirstLetter(data.order),
    family: Formatter.capitalizeFirstLetter(data.family),
    genus: Formatter.capitalizeFirstLetter(data.genus),
    specie: Formatter.capitalizeFirstLetter(data.specie),
  };
};

export const serializePost = data => {
  return {
    title: data.title,
  };
};

export const serializeTaxonomy = data => {
  console.log('data');
}

export const deSerializeTaxonomy = data => {
  return {
    kingdom: Formatter.capitalizeFirstLetter(data.kingdom),
    phylum: Formatter.capitalizeFirstLetter(data.phylum),
    className: Formatter.capitalizeFirstLetter(data.className),
    order: Formatter.capitalizeFirstLetter(data.order),
    family: Formatter.capitalizeFirstLetter(data.family),
    genus: Formatter.capitalizeFirstLetter(data.genus),
    specie: Formatter.capitalizeFirstLetter(data.specie),
  }
}

export const deSerializePostImage = data => {
  return {
    id: data.id,
    url: data.url,
    postId: data.post_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};
