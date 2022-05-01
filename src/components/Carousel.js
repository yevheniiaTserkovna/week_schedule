import { svgId } from '../data';
import { useState } from 'react';
import classNames from 'classnames';

const svgSize = 250;

function Carousel({ taskImgToAddRef }) {
  const [selectedImg, setSelectedImg] = useState(0);

  const clickLeftHandler = () => {
    if (selectedImg > 0) {
      setSelectedImg((prevState) => {
        const newState = prevState - 1;
        taskImgToAddRef.current = svgId[newState];
        return newState;
      });
    }
  };

  const clickRightHandler = () => {
    if (selectedImg < svgId.length - 1) {
      setSelectedImg((prevState) => {
        const newState = prevState + 1;
        taskImgToAddRef.current = svgId[newState];
        return newState;
      });
    }
  };

  const leftArrowClasses = classNames('carouser-arrow carouser-arrow-left', {
    'carouser-arrow-disabled': selectedImg === 0,
  });

  const rightArrowClasses = classNames('carouser-arrow carouser-arrow-right', {
    'carouser-arrow-disabled': selectedImg === svgId.length - 1,
  });

  return (
    <div className='carousel-wrapper'>
      <div className={leftArrowClasses} onClick={clickLeftHandler}>
        &#8249;
      </div>
      <div className={rightArrowClasses} onClick={clickRightHandler}>
        &#8250;
      </div>
      <div className='carousel-conteiner'>
        <div
          className='carousel-items'
          style={{ marginLeft: -(selectedImg * svgSize) }}
        >
          {svgId.map((item) => (
            <div key={item} className='carousel-svg'>
              <svg version='2.0' fill='white'>
                <use href={'#' + item} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
