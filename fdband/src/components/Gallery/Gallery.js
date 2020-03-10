import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./Gallery.scss"
import g1 from '../../assets/images/g1.jpeg'
import g2 from '../../assets/images/g2.jpeg'
import g3 from '../../assets/images/g3.jpeg'

const images = [
  {
    original: g1,
    thumbnail: g1,
  },
  {
    original: g3,
    thumbnail: g3,
  },
  {
    original: g2,
    thumbnail: g2,
  },
];

export default class Gallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}