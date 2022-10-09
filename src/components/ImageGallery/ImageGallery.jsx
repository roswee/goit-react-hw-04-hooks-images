import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import styles from './ImageGallery.module.css';
import {nanoid} from "nanoid";

const { gallery } = styles;

export const ImageGallery = ({images, openModal}) => {
    return (
      <ul className={gallery}>
        {images.map(image => {
          return <ImageGalleryItem
          image={image}
          key={nanoid()}
          openModal={openModal}/>;
        })}
      </ul>
    );
}

export default ImageGallery;
