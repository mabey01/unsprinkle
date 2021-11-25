export function getImageSource(imageName, ratio = 1, format = "jpeg") {
  if (ratio === 1) {
    return `/images/${imageName}.${format}`;
  }

  return `/images/${imageName}@${ratio}x.${format}`;
}
