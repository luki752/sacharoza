import React from "react";
//styling
import styled from "styled-components";
//icons
import { AiOutlineSearch } from "react-icons/ai";
//router
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const NavMobileMenu = ({
  textInput,
  inputHandler,
  pageHandler,
  submitSearch,
  menu,
  setMenu,
}) => {
  //handlers
  const linkHandler = () => {
    window.scrollTo(0, 0);
    setMenu(false);
  };
  return (
    <MenuContainer>
      <div className={menu ? "menu active" : "menu"}>
        <ul>
          <li>
            <form>
              <input
                type="text"
                placeholder="search"
                value={textInput}
                onChange={inputHandler}
                onKeyDown={pageHandler}
              />

              <button onClick={submitSearch} className="search-icon">
                <AiOutlineSearch />
              </button>
            </form>
          </li>
          <li className="header">Movies</li>
          <Toggle state={true}>
            <li>
              <Link to="/movies/popular" onClick={() => linkHandler()}>
                Popular
              </Link>
            </li>
            <li>
              <Link to="/movies/upcoming" onClick={() => linkHandler()}>
                Upcoming
              </Link>
            </li>
            <li>
              <Link to="/movies/top" onClick={() => linkHandler()}>
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/movies/now-playing" onClick={() => linkHandler()}>
                now playing
              </Link>
            </li>
          </Toggle>
          <li className="header">TV Shows</li>
          <Toggle state={true}>
            <li className="list-item">
              <Link to="/tv-series/popular" onClick={() => linkHandler()}>
                Popular
              </Link>
            </li>
            <li className="list-item">
              <Link to="/tv-series/today" onClick={() => linkHandler()}>
                Today in TV
              </Link>
            </li>
            <li className="list-item">
              <Link to="/tv-series/on-air" onClick={() => linkHandler()}>
                On the air
              </Link>
            </li>
            <li className="list-item">
              <Link to="/tv-series/top" onClick={() => linkHandler()}>
                Top Rated
              </Link>
            </li>
          </Toggle>
        </ul>
      </div>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  .menu {
    display: flex;
    flex-direction: column;
    align-items: Center;
    justify-content: flex-start;
    width: 100%;
    height: 125vh;
    position: absolute;
    top: 79px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    overflow: auto;
    ul {
      list-style: none;
      text-align: center;
      .header {
        font-size: 1.6rem;
      }
      li {
        font-size: 1.5rem;
        padding: 0.5rem;
        form {
          position: relative;
          input {
            padding: 0.5rem;
          }
          .search-icon {
            position: static;
            margin-left: -30px;
            background: none;
            border: none;
            top: 0;
            transform: translate(0, 30%);
            font-size: 2rem;
          }
        }
      }
    }
  }
  .active {
    background: #242222;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
`;

export default NavMobileMenu;
