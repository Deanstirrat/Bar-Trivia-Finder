import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import searchPlaceholderValues from './Assets/searchPlaceholderValues';
import BebasNeue from './Assets/BebasNeue-Regular.ttf';


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [placeholder, setPlaceholder] = useState(searchPlaceholderValues)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(searchPlaceholderValues);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const onChangeHandler = (event) =>{
    setSearchValue(event.target.value);
  }

  return (
    <HomeContainer>
      <Header></Header>
      <Body>
        <Title>Expore trivia near you</Title>
        <SearchBar>
          <SearchText
          type="text"
          placeholder={placeholder}
          id="name"
          name="name"
          onChange={onChangeHandler}
          />
          <SearchButton>Find trivia</SearchButton>
        </SearchBar>
      </Body>

    </HomeContainer>
  );
}

//keyframes
const slideUp = keyframes`
0% {
  transform: translatey(100%);
}
100% {
  transform: translatey(0);
}
`;
const slideDown = keyframes`
0% {
  transform: translatey(0%);
}
100% {
  transform: translatey(100%);
}
`;

const HomeContainer = styled.div`
position: relative;
height: 100vh;
width: 100vw;
`;

const Header = styled.div`
display: flex;
position: absolute;
top: -150px;
left:0;
z-index: 5;
height: 150px;
width: 100%;
background: rgb(221,178,99);
background: linear-gradient(0deg, rgba(221,178,99,1) 0%, rgba(240,233,219,1) 44%, rgba(255,255,255,1) 100%);
clip-path: polygon(0% 0%, 0% 82.5%, 1.69492% 84.3293%, 3.38983% 86.1385%, 5.08475% 87.9078%, 6.77966% 89.6179%, 8.47458% 91.25%, 10.1695% 92.7862%, 11.8644% 94.2098%, 13.5593% 95.505%, 15.2542% 96.6578%, 16.9492% 97.6555%, 18.6441% 98.487%, 20.339% 99.1435%, 22.0339% 99.6176%, 23.7288% 99.9041%, 25.4237% 100%, 27.1186% 99.9041%, 28.8136% 99.6176%, 30.5085% 99.1435%, 32.2034% 98.487%, 33.8983% 97.6555%, 35.5932% 96.6578%, 37.2881% 95.505%, 38.9831% 94.2098%, 40.678% 92.7862%, 42.3729% 91.25%, 44.0678% 89.6179%, 45.7627% 87.9078%, 47.4576% 86.1385%, 49.1525% 84.3293%, 50.8475% 82.5%, 52.5424% 80.6708%, 54.2373% 78.8616%, 55.9322% 77.0922%, 57.6271% 75.3821%, 59.322% 73.75%, 61.017% 72.2138%, 62.7119% 70.7902%, 64.4068% 69.495%, 66.1017% 68.3422%, 67.7966% 67.3446%, 69.4915% 66.513%, 71.1864% 65.8565%, 72.8814% 65.3824%, 74.5763% 65.0959%, 76.2712% 65%, 77.9661% 65.0959%, 79.661% 65.3824%, 81.3559% 65.8565%, 83.0509% 66.513%, 84.7458% 67.3446%, 86.4407% 68.3422%, 88.1356% 69.495%, 89.8305% 70.7902%, 91.5254% 72.2138%, 93.2203% 73.75%, 94.9153% 75.3821%, 96.6102% 77.0922%, 98.3051% 78.8616%, 100% 80.6708%, 100% 0%); shape-outside: polygon(0% 0%, 0% 82.5%, 1.69492% 84.3293%, 3.38983% 86.1385%, 5.08475% 87.9078%, 6.77966% 89.6179%, 8.47458% 91.25%, 10.1695% 92.7862%, 11.8644% 94.2098%, 13.5593% 95.505%, 15.2542% 96.6578%, 16.9492% 97.6555%, 18.6441% 98.487%, 20.339% 99.1435%, 22.0339% 99.6176%, 23.7288% 99.9041%, 25.4237% 100%, 27.1186% 99.9041%, 28.8136% 99.6176%, 30.5085% 99.1435%, 32.2034% 98.487%, 33.8983% 97.6555%, 35.5932% 96.6578%, 37.2881% 95.505%, 38.9831% 94.2098%, 40.678% 92.7862%, 42.3729% 91.25%, 44.0678% 89.6179%, 45.7627% 87.9078%, 47.4576% 86.1385%, 49.1525% 84.3293%, 50.8475% 82.5%, 52.5424% 80.6708%, 54.2373% 78.8616%, 55.9322% 77.0922%, 57.6271% 75.3821%, 59.322% 73.75%, 61.017% 72.2138%, 62.7119% 70.7902%, 64.4068% 69.495%, 66.1017% 68.3422%, 67.7966% 67.3446%, 69.4915% 66.513%, 71.1864% 65.8565%, 72.8814% 65.3824%, 74.5763% 65.0959%, 76.2712% 65%, 77.9661% 65.0959%, 79.661% 65.3824%, 81.3559% 65.8565%, 83.0509% 66.513%, 84.7458% 67.3446%, 86.4407% 68.3422%, 88.1356% 69.495%, 89.8305% 70.7902%, 91.5254% 72.2138%, 93.2203% 73.75%, 94.9153% 75.3821%, 96.6102% 77.0922%, 98.3051% 78.8616%, 100% 80.6708%, 100% 0%);
animation: 0.5s ease-out 1s 1 ${slideDown} forwards;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
background: rgb(228,127,3);
background: linear-gradient(0deg, rgba(228,127,3,1) 37%, rgba(244,204,12,1) 93%);
animation: 1s ease-out 0s 1 ${slideUp};
padding-top: 250px;
gap: 20px;
`;

const Title = styled.div`
font-size: 7rem;
font-family: 'Bebas Neue', cursive;
@media (max-width: 786px) {
  font-size: 6rem;
}
@media (max-width: 600px) {
  font-size: 4rem;
}
`;

const SearchBar = styled.div`
width: 600px;
height: 50px;
display: flex;
align-contents; center;
justify-content: space-between;
border-radius: 10px;
background-color: white;
padding: 5px;
@media (max-width: 600px) {
  width: 260px;
  height: 25px;
}
`;

const SearchText = styled.input`
width: 80%;
height: 100%;
font-size: 2rem;
border: none;
padding: 0;
padding-left: 10px;
border-radius: 10px;

@media (max-width: 786px) {
  font-size: 2rem;
  width: 80%;
}
@media (max-width: 600px) {
  font-size: 0.75rem;
  width: 60%;
}
`;
const SearchButton = styled.button`
border: none;
border-radius: 5px;
margin: 5px;
background-color: #24a0ed;
font-weight: bold;
&:hover{
  filter: brightness(90%);
}

@media (max-width: 786px) {
  margin: 0;
  font-size: 1rem;
}
@media (max-width: 600px) {
  margin: 0;
  font-size: 0.75rem;
}
`;

export default App;
