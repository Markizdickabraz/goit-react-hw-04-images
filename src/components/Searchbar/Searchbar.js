import React, { Component } from "react";
import { SearchForm, SearchbarBtn, SearchInput, SearchbarStyled } from "./searchbarStyled";
import { ReactComponent as SaerchIcon } from '../../svg/search.svg'
import PropTypes from 'prop-types';


class Searchbar extends Component {
    state = {
        name: ''
    }
     
  handleChacge = e => {
      const {name, value} = e.currentTarget;
      this.setState({ [name]: value })
  }


  formSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      alert('Там цей, строка пуста!');
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({name: ''})
  }


    render() {
        return (
    <SearchbarStyled>
        <SearchForm onSubmit={this.formSubmit}>
    <SearchbarBtn type="submit">
              
                  <SaerchIcon></SaerchIcon>
                  
    </SearchbarBtn>

    <SearchInput
        name="name"
       
        value={this.state.name}
        onChange = {this.handleChacge}
      type="text"
                placeholder="Search images and photos"
                autoComplete="off"
    />
  </SearchForm>
</SearchbarStyled>
        )
    }
}

export default Searchbar;

Searchbar.ptopTypes = {
  onSubmit: PropTypes.func.isRequired
}