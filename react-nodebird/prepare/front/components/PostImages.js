import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from './ImagesZoom';

import { PlusOutlined } from '@ant-design/icons';

//이미지가 하나일 경우 화면에 하나가 꽉차게 
//여러개 일경우 아래로 내려오게 
//일정 갯수가 넘어가면 
const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  //이미지를 클릭하면 캐러셀 형식으로 슬라이드해서 확대해서 보여준다. 
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if(images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    )
  }

  if(images.length === 2) {
    return (
      <>
        <img role="presentation" style={{width: "50%", display: 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{width: "50%", display: 'inline-block'}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  //이미지가 3개 이상이라면
  return (
    <>
      <div>
        <img role="presentation" style={{width: "50%"}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <div
          role="presentation"
          style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  )
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;
