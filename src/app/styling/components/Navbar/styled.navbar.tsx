import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.navbar.inactiveTextColor};
  &.active {
    color: ${({ theme }) => theme.text};
  }
`;

const SearchInput = styled.input`
  border-radius: 6px;
  width: 356px;
  height: 48px;
  background-color: ${({ theme }) => theme.navbar.inputBackgroundColor};
  color: ${({ theme }) => theme.navbar.inputTextColor};
  border: 1px #ffffff0d solid;
  padding-left: 10px;
  position: relative;
`;

const DropdownDiv = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.navbar.inputBackgroundColor};
  color: ${({ theme }) => theme.navbar.inputTextColor};
  border: red solid 1px;
  width: 356px;
`;

const DropdownItem = styled.div`
  padding: 10px 5px;
`;

const CurrencyDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px #ffffff0d solid;
  padding: 12px 16px;
`;

const StyledSelect = styled.select`
  background-color: ${({ theme }) => theme.navbar.inputBackgroundColor};
  color: ${({ theme }) => theme.navbar.selectTextColor};
`;

const StyledModeBtn = styled.button`
  color: #ffffffcc;
  background-color: #191925;
  border-radius: 12px;
  border: 1px #ffffff0d solid;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  NavContainer,
  LinkContainer,
  StyledLink,
  SearchInput,
  DropdownDiv,
  DropdownItem,
  CurrencyDiv,
  StyledSelect,
  StyledModeBtn,
};
