import React from 'react'
import styled from 'styled-components'
import homeIcon from '../images/home.svg'
import messageIcon from '../images/message.svg'
import searchIcon from '../images/search.svg'
import notificationIcon from '../images/heart.svg'
import circleIcon from '../images/circle.svg'

export const Nav = () => {
    return (
        <Navbar>
            <Logo>HelloWorld</Logo>
            <IconsWrapper>
                <Icon smaller src={homeIcon} alt="home icon"/>
                <Icon smaller src={messageIcon} alt="messages icon"/>
                <Icon smaller src={searchIcon} alt="search icon"/>
                <Icon src={notificationIcon} alt="notifications heart icon"/>
                <Icon last src={circleIcon} alt="circle icon"/>
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
`
