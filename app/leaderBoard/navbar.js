"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  background-color: transparent;
  border-radius: 30px 30px 30px 30px;
  .active {
    border-right: 4px solid white;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 1.2rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: #000;
  width: 3.5rem;
  height: 80vh;
  margin-top: 2rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  z-index: 80;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled.a`
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid white;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0;
  /* border: 2px solid white; */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: black;
  color: white;

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    cursor: pointer;
    object-fit: cover;
    &:hover {
      border: 2px solid grey;
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: grey;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navs = [
    { name: "Home", image: "/home-solid.svg" },
    { name: "Team", image: "/social.svg" },
    { name: "Calender", image: "/sceduled.svg" },
    { name: "Starred", image: "/starred.svg" },
  ];
  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <Container className="block md:hidden">
        <Button clicked={click} onClick={() => handleClick()}></Button>
        <SidebarContainer>
          <Logo>
            <Image
              className="mix-blend-plus-lighter"
              src="/Technova.png"
              alt="logo"
              width={2.5}
              height={2.5}
            />
          </Logo>
          <SlickBar clicked={click}>
            {navs.map((e, index) => {
              return (
                <Item
                  onClick={() => setClick(false)}
                  exact
                  activeClassName="active"
                  // to="/"
                >
                  <Image src={e.image} alt=" " width={1.2} height={1.2} />
                  <Text clicked={click}>{e.name}</Text>
                </Item>
              );
            })}
          </SlickBar>

          <Profile clicked={profileClick}>
            <img 
              onClick={() => handleProfileClick()}
              src="/NAAC.png"
              alt=""
              width={2.5}
              height={2.5}
            />
            <Details clicked={profileClick}>
              {/* <Name>
                <h4>Jhon&nbsp;Doe</h4>
                <a href="/#">view&nbsp;profile</a>
              </Name> */}

              <Logout>
                <img src="/power-off-solid.svg" alt="logout" />
              </Logout>
            </Details>
          </Profile>
        </SidebarContainer>
      </Container>
    </Suspense>
  );
};

export default Sidebar;
