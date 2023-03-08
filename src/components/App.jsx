import React , { Component} from 'react'
import { AppStyled } from './AppStyled'
import GlobalStyle from 'globalStyled'
import Searchbar from './Searchbar/Searchbar'
import ImageGallary from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal'
import LoadMore from './Button/Button'
import axios from 'axios'
import Loader from 'components/Loader/Loader'




class App extends Component {
  state = {
    name: '',
    data: null,
    showModal: false,
    largeUrl: null,
    alt: null,
    loading: false,
    perPage: 12,
    page: 1
  }
  
  async fetch() {
    this.setState({
      loading: true
   })
      const BASEURL = 'https://pixabay.com/api/';
      try {
        const response = await axios.get(`${BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${this.state.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.page}`);
        const responseData = await response.data.hits;
        this.setState({
          data: responseData
        })
    
      } catch (error) {
        console.log(error);
      }
        this.setState({loading:false})
  }

  toggleModal = () =>
    this.setState(({ showModal }) => ({
    showModal: !showModal
  }))
  

  modalItems = (dataFind) => {
    this.setState({
      largeUrl: dataFind.largeImageURL,
      alt: dataFind.tags,
  })
  }

  onSubmit = (data) => {
    this.setState({
      name: data.name})
  }

  loadMoreClick = (data) => {
    this.setState(prevState => ({
      perPage: prevState.perPage + Number(data.perPage)
    }))
  }
  
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.perPage);
    // console.log(prevState.perPage)
        if (this.state.perPage !== prevState.perPage) {
          this.fetch();
        }
    // console.log(this.state.name);
    // console.log(prevState.name)

        if (this.state.name !== prevState.name) {
           this.setState({
            perPage: 12,
      })
          this.fetch();
    } 

  }

  render() {
    return (
      <AppStyled>
        <GlobalStyle />
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallary data={this.state.data} toggleModal={() => { this.toggleModal() }} modalItems={this.modalItems} /> 
        {this.state.showModal && <Modal onClick={()=> {this.toggleModal()}} src={this.state.largeUrl} alt={this.state.alt}></Modal>}
        {this.state.data !== null && <LoadMore click={this.loadMoreClick} />}
        {this.state.loading && <Loader /> }
      </AppStyled>
    );
  }
};

export default App;