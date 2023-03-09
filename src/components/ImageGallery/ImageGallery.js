import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import  { useState, useEffect} from 'react'
import { GalleryStyled } from './ImageGalleryStyled'
import PropTypes from 'prop-types';

export default function ImageGallary (props) {

  const [data, setData] = useState(null);
  
  useEffect(() => {
  setData(props.data)
},[props.data])

 const galleryItemClick =(e) => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    const dataFind = data.find(items => items.id === Number(e.target.id))
    props.modalItems(dataFind);
    props.toggleModal();

  }


        return (
            <div>
            {data !== null && <GalleryStyled onClick={galleryItemClick}>
              <ImageGalleryItem items={data} />
            </GalleryStyled>}
                    </div>
    )
    }

ImageGallary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  modalItems: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
}