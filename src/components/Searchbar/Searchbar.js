import  { useState} from "react";
import { SearchForm, SearchbarBtn, SearchInput, SearchbarStyled } from "./searchbarStyled";
import { ReactComponent as SaerchIcon } from '../../svg/search.svg'
import PropTypes from 'prop-types';

export default function Searchbar (props) {
     
  const [name, setName] = useState('')

  const handleChacge = e => {
    setName(e.currentTarget.value)
  }

 const formSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Там цей, строка пуста!');
      return;
    }
   props.onSubmit({name})
   setName('')
  }

        return (
    <SearchbarStyled>
        <SearchForm onSubmit={formSubmit}>
    <SearchbarBtn type="submit">
       <SaerchIcon></SaerchIcon>            
    </SearchbarBtn>
    <SearchInput
        name="name"
        value={name}
        onChange = {handleChacge}
        type="text"
        placeholder="Search images and photos"
        autoComplete="off"
    />
  </SearchForm>
</SearchbarStyled>
        )
    }

Searchbar.ptopTypes = {
  onSubmit: PropTypes.func.isRequired
}