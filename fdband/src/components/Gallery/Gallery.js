import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./Gallery.scss"
import g1 from '../../assets/images/g1.jpeg'
import g2 from '../../assets/images/g2.jpeg'
import g3 from '../../assets/images/g3.jpeg'

import classNames from 'classnames'
import { useEffect, useState } from 'react'

const Gallery = () => {

  const [ scrolled, setScrolled ] = useState()
  const galleryChanges = classNames('gallery', {
    opacityAn: scrolled,
  })
  useEffect(_ => {
    const handleScroll = _ => { 
      if (window.pageYOffset > 700) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
  

  return(
    <>
    <div className={galleryChanges}>
            <ImageGallery items={images} />
      </div>
    </>
  )
}

export default Gallery;












// import React from 'react';
// import ImageGallery from 'react-image-gallery';
// import "./Gallery.scss"
// import g1 from '../../assets/images/g1.jpeg'
// import g2 from '../../assets/images/g2.jpeg'
// import g3 from '../../assets/images/g3.jpeg'

// import '../../stylesSettings/_keyframes.scss'

// const images = [
//   {
//     original: g1,
//     thumbnail: g1,
//   },
//   {
//     original: g3,
//     thumbnail: g3,
//   },
//   {
//     original: g2,
//     thumbnail: g2,
//   },
// ];

// export default class Gallery extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleScroll = this.handleScroll.bind(this);
//   }
  
//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   };
  
//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   };
  
//   handleScroll(event) {
//     console.log('the scroll things', event);
//     const wScroll = window.scrollY;
//   };

//   render() {
//     return (
//         <>
//         <div className='gallery'>
//             <ImageGallery items={images} />
//         </div>
//         </>
//     )
//   }
// }