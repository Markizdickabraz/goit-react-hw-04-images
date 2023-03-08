import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import { GalleryStyled } from './ImageGalleryStyled'
import PropTypes from 'prop-types';


export default class ImageGallary extends Component {
  state = {
        data: null,
        name: '' 
    }
    
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      
      this.setState({data: this.props.data})
    }
  }
  
  galleryItemClick =(e) => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    const dataFind = this.state.data.find(items => items.id === Number(e.target.id))
    this.props.modalItems(dataFind);
    this.props.toggleModal();

  }

    render() {
        return (
            <div>
            {this.state.data !== null && <GalleryStyled onClick={this.galleryItemClick}>
              <ImageGalleryItem items={this.state.data} />
            </GalleryStyled>}
                    </div>
    )
    }
}

ImageGallary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  modalItems: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
}