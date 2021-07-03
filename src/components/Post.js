import React from 'react'
import styled from 'styled-components'
import { Comments } from '../components/Comments'
import avatar from '../images/avatar.jpg'
import options from '../images/options.svg'
import placeholder from '../images/ig-placeholder.jpg'
import heart from '../images/heart.svg'
import comment from '../images/comment.svg'
import share from '../images/share.svg'
import bookmark from '../images/bookmark.svg'

export const Post = () => {
    return (
        <>
            <Header>
                <Avatar src={avatar} alt="profile picture"/>
                <div>
                    <HeaderText username>emigraced</HeaderText>
                    <HeaderText location>Brisbane</HeaderText>
                </div>
                <Options src={options}/>
            </Header>
            <Photo src={placeholder} alt="A picture of a white balcony on a warm orange wall."/> 
            <InteractionBar>
                <Icon heart src={heart} alt="like button"/>
                <Icon src={comment} alt="comment button"/>
                <Icon share src={share} alt="share button"/>
                <Icon bookmark src={bookmark} alt="save button"/>                
            </InteractionBar>
            <Caption>
                <CaptionText caption><CaptionText username>emigraced</CaptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod quam sit amet diam fermentum ullamcorper. </CaptionText>
            </Caption>
            <Comments/>
        </>
    )
}

const Header = styled.div`
    height: 60px;
    width: 100%;
    background: white;
    margin-top: 3px;
    display: flex;
`

const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border: solid 2px #D45784;
    border-radius: 50%;
    display: inline-block;
    margin: 15px;
    object-fit: cover;
`

const HeaderText = styled.p`
    margin: 0;
    ${props => props.username ? "margin-top: 15px; font-weight: bold;" : null}
    font-size: ${props => props.location ? "12px" : "16px"};
`

const Options = styled.img`
    height: 25px;
    width: 25px;
    margin: 20px 15px auto auto;
`

const Photo = styled.img`
    width: 100%;
`

const InteractionBar = styled.div`
    height: 50px;
    width: 100%;
    background: white;
    display: flex;
`

const Icon = styled.img`
    height: 28px;
    width: 28px;
    margin: 5px 8px;
    ${props => props.heart ? "margin-left: 10px" : null}
    ${props => props.share ? "margin-left: 5px" : null}
    ${props => props.bookmark ? "margin: 5px 10px auto auto " : null}
`

const Caption = styled.div`
    display: flex;
    margin: 0 12px;    
`

const CaptionText = styled.p`
    margin: 0;
    font-size: 16px;
    ${props => props.username ? "font-weight: bold; margin-right: 3px; display: inline;" : null}
`
