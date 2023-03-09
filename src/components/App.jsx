import { useState, useEffect } from 'react'
import { AppStyled } from './AppStyled'
import GlobalStyle from 'globalStyled'
import Searchbar from './Searchbar/Searchbar'
import ImageGallary from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal'
import LoadMore from './Button/Button'
import axios from 'axios'
import Loader from 'components/Loader/Loader'

export default function App () {
  
  const [name, setName] = useState('');
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeUrl, setLargeUrl] = useState(null);
  const [alt, setAlt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(12);
  // eslint-disable-next-line
  const [page, setPage] = useState(1);

  
  async function fetch() {
    setLoading(true)
      const BASEURL = 'https://pixabay.com/api/';
      try {
        const response = await axios.get(`${BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`);
        const responseData = await response.data.hits;

        setData(responseData)
    
      } catch (error) {
        console.log(error);
      }
        setLoading(false)
  }
  
  const toggleModal = () => {
      setShowModal(!showModal)
  }

  const modalItems = (dataFind) => {
    setLargeUrl(dataFind.largeImageURL)
    setAlt(dataFind.tags)
  }

  const  onSubmit = (data) => {
    setName(data.name)
    setPerPage(12)
  }

  const  loadMoreClick = (data) => {
    setPerPage(perPage + data.perPage)
  }
  
  useEffect(() => {
    if (!name) {
      return;
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [perPage, name])

    return (
      <AppStyled>
        <GlobalStyle />
        <Searchbar onSubmit={onSubmit} />
        <ImageGallary data={data} toggleModal={() => {toggleModal()}} modalItems={modalItems} /> 
        {showModal && <Modal onClick={()=> {toggleModal()}} src={largeUrl} alt={alt}></Modal>}
        {data !== null && <LoadMore click={loadMoreClick} />}
        {loading && <Loader /> }
      </AppStyled>
    );
  }