import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images, title }) => {
  return (
    <ImageList sx={{ width: '100%', height: 525 }} cols={ 4 } rowHeight={ 180 }>
      {images.map(url => (
        <ImageListItem key={url}>
          <img
            src={`${url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
