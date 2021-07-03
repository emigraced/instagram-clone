import React from 'react'
import styled from 'styled-components'
import homeIcon from '../images/home.svg'
import messageIcon from '../images/message.svg'
import searchIcon from '../images/search.svg'
import notificationIcon from '../images/heart.svg'
import avatar from '../images/avatar.jpg'

export const Nav = () => {
    return (
        <Navbar>
            <Logo>HelloWorld</Logo>
            <IconsWrapper>
                <Icon smaller src={homeIcon} alt="home icon"/>
                <Icon smaller src={messageIcon} alt="messages icon"/>
                <Icon smaller src={searchIcon} alt="search icon"/>
                <Icon src={notificationIcon} alt="notifications heart icon"/>
                <Icon avatar src={avatar} alt="avatar"/>
            </IconsWrapper>
        </Navbar>
    )
}

const Navbar = styled.nav`
    width: 100%;
    max-width: 700px;
    height: 50px;
    background-color: white;
    position: fixed;
    top: 0;
    opacity: 1;
    z-index: 10;
    display: flex;
`

const Logo = styled.p`
    margin: 15px 0 0 20px;
    font-size: 22px;
    display: inline-block;
`

const IconsWrapper = styled.div`
    margin: 15px 18px auto auto 
`

const Icon = styled.img`
    height: ${props => props.smaller ? "23px" : "22px"};
    width: ${props => props.smaller ? "23px" : "22px"};
    margin-left: 18px;
    display: inline-block;
    ${props => props.avatar ? "height: 18px; width: 18px; border: solid 1px black; border-radius: 50%; object-fit: cover;" : null}
`
