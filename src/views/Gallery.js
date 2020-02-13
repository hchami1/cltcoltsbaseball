import React from "react";
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const StyledWrapper = styled.div`
.image-gallery-image{
  width: 50%;
}
`;

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Gallery = () => {
  return (
    <StyledWrapper>
      <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
    </StyledWrapper>
  );
};

export default Gallery;