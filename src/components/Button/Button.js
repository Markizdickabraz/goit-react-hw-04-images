import { BtnLoadMore } from 'components/Button/buttonStyled'
import { useState } from 'react'
import PropTypes from 'prop-types';


export default function LoadMore (props){
    // eslint-disable-next-line
    const [perPage, setPerPage] = useState(12)

    const onClick = () => {
        // setPerPage(perPage + perPage)
        props.click(perPage)
    }

        return (
            <BtnLoadMore type='button' onClick={onClick}>Load more</BtnLoadMore>
        )
    }

LoadMore.propTypes = {
    click : PropTypes.func.isRequired
}