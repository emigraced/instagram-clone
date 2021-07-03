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
                <Avatar poster src={avatar} alt="profile picture"/>
                <div>
                    <HeaderText username>emigraced</HeaderText>
                    <HeaderText location>Brisbane</HeaderText>
                </div>
                <Options src={options}/>
            </Header>
            <Photo src={placeholder} alt="A picture of a white balcony on a warm orange wall."/> 
            <InteractionBar>
                <IconsContainer>
                    <Icon heart src={heart} alt="like button"/>
                    <Icon src={comment} alt="comment button"/>
                    <Icon share src={share} alt="share button"/>
                    <Icon bookmark src={bookmark} alt="save button"/>  
                </IconsContainer>
                <LikePreviewContainer>
                    <Avatar liker src={avatar} alt="avatar" />
                    <LikePreview>Liked by _ and others</LikePreview>
                </LikePreviewContainer>              
            </InteractionBar>
            <Caption>
                <CaptionText caption><CaptionText username>emigraced</CaptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod quam sit amet diam fermentum ullamcorper. </CaptionText>
            </Caption>
            <Comments/>
            <TimeStamp>n hours ago</TimeStamp>
        </>
    )
}

const Header = styled.div`
    height: 60px;
    width: 100%;
    margin-top: 0;
    display: flex;
`

const Avatar = styled.img`
    border: solid 1px black;
    border-radius: 50%;
    object-fit: cover;
    height: 18px;
    width: 18px;
    ${props => props.poster ? "display: inline-block; margin: 15px; border: solid 2px #D45784; height: 30px; width: 30px;" : null}
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
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
`

const IconsContainer = styled.div`
    width: 100%;
    display: flex;
`

const Icon = styled.img`
    height: 28px;
    width: 28px;
    margin: 5px 8px;
    ${props => props.heart ? "margin-left: 10px" : null}
    ${props => props.share ? "margin-left: 5px" : null}
    ${props => props.bookmark ? "margin: 5px 12px auto auto " : null}
`

const LikePreviewContainer = styled.div`
    display: flex;
    margin: 3px 12px 0;
`

const LikePreview = styled.p`
    font-size: 14px;
    margin: 5px;
`

const Caption = styled.div`
    display: flex;
    margin: 10px 12px 0 12px;   
    
`

const CaptionText = styled.p`
    margin: 0;
    font-size: 16px;
    ${props => props.username ? "font-weight: bold; margin-right: 3px; display: inline;" : null}
`

const TimeStamp = styled.p`
    font-size: 10px; 
    margin: 15px 12px 20px 12px; 
    text-transform: uppercase;
    color: grey;
`