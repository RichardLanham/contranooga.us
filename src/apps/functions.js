export const getThumb = (attribs) => {
  if (!attribs) {
    return false;
  }

  const formats = attribs.formats;
  if (!formats) {
    return attribs;
  }
  if (formats.thumbnail) {
    return formats.thumbnail;
  }
  if (formats.small) {
    return formats.small;
  }
};
export const getLarge = (attribs) => {
  if (!attribs) {
    return false;
  }

  const formats = attribs.formats;
  if (!formats) {
    return false;
  }
  if (formats.large) {
    return formats.large;
  }
  if (formats.medium) {
    return formats.medium;
  }
  if (formats.small) {
    return formats.small;
  }
  if (formats.thumbnails) {
    return formats.thumbnails;
  }
};

export const getMedium = (attribs) => {
  if (!attribs) {
    return false;
  }
  const formats = attribs.formats;
  if (!formats) {
    return false;
  }
  if (formats.medium) {
    return formats.medium;
  }
  if (formats.small) {
    return formats.small;
  }
  if (formats.thumbnails) {
    return formats.thumbnails;
  }
};

export const getSmall = (attribs) => {
  if (!attribs) {
    return false;
  }
  const formats = attribs.formats;
  if (!formats) {
    return false;
  }
  if (formats.small) {
    return formats.small;
  }
  if (formats.thumbnails) {
    return formats.thumbnails;
  }
};

export const createMarkup = (html) => {
  return { __html: html };
};
