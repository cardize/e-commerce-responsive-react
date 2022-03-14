import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: #ebf1ff;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    &:hover {
        transform: scale(1.1);
        transition: transform 200ms;
`

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'Verdana';
  font-size: 20px;
  color: #222;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 200ms;
  }
`
