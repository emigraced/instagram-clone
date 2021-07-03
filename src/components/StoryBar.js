import React from 'react'
import styled from 'styled-components'

export const StoryBar = () => {
    return (
        <StoryContainer>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
        </StoryContainer>
    )
}

const StoryContainer = styled.section`
    height: 80px;
    width: 100%;
    margin-top: 50px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none;
    }
`

const Circle = styled.div`
    height: 50px;
    width: 50px;
    border: solid 2px #D45784;
    border-radius: 50%;
    display: inline-block;
    margin: 15px 9px;
`
