import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import * as api from '../services/fetcher';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState(null);

  const setStartParams = searchValue => {
    if (searchValue === '') {
      return alert(`Please enter what you want to find ☺`);
    }
    if (searchValue === searchedValue) {
      return;
    }

    setImages([]);
    setSearchedValue(searchValue);
    setPage(1);
  };
  
  // rendering gallery
  const showImages = async (searchValue, page) => {
    setIsLoading(true);

    try {
      const newImage = await api.fetchImg(searchValue, page);

      setImages([...images, ...newImage]);
    } catch (newError) {
      setError(newError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {showImages(searchedValue, page)},
   // eslint-disable-next-line
  [searchedValue, page]);

  // Button Load More
  const loadMore = () => {
    setPage(page + 1);
  };
  // Modal

  const openModal = (src, alt) => {
    setLargeImageURL({ src, alt });
  };

  const closeModal = () => {
    setLargeImageURL(null);
  };

  return (
    <div>
      <Searchbar onSubmit={setStartParams} />
      {error && <p>It's something wrong, check it: {error.message}</p>}
      {isLoading && <Loader />}

      <ImageGallery images={images} openModal={openModal} />
      {images.length > 0 && <Button loadMore={loadMore} />}

      {largeImageURL && <Modal data={largeImageURL} closeModal={closeModal} />}
    </div>
  );
};
