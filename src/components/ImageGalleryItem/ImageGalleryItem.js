import { GalleryImageStyled, GalleryItemStyled } from "./ImageGalleryItemsStyled";
import PropTypes  from "prop-types";


export default function ImageGalleryItem({ items }) {
    return (
        items.map(item => (
        <GalleryItemStyled key ={item.id}>
                <GalleryImageStyled id={item.id} src={item.webformatURL} alt={item.tags} />
        </GalleryItemStyled>
        ))
        )
}

ImageGalleryItem.propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired
}