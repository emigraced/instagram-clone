import React from 'react'
import styled from 'styled-components'
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
                <Icon first src={heart} alt="like button"/>
                <Icon src={comment} alt="comment button"/>
                <Icon src={share} alt="share button"/>
                <Icon last src={bookmark} alt="save button"/>                
            </InteractionBar>
            <Caption>
                
            </Caption>
            <Comments>
                <p>View all n comments</p>
            </Comments>
            <TimeStamp>
                <p>n hours ago</p>
            </TimeStamp>


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
    ${props => props.username ? "margin-top: 15px;" : null}
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
    background: white;
`

const Icon = styled.img`
    height: 28px;
    width: 28px;
    margin: 5px 8px;
    ${props => props.first ? "margin-left: 15px" : null}
    ${props => props.last ? "position: absolute; right: 10px;" : null}
`

const Caption = styled.div`

`

const Comments = styled.div`

`

const TimeStamp = styled.div`

`