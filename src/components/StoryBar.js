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
        </StoryContainer>
    )
}

const StoryContainer = styled.section`
    height: 100px;
    width: 100vw;
    background: white;
    margin-top: 53px;
`

const Circle = styled.div`
    height: 50px;
    width: 50px;
    border: solid 2px #D45784;
    border-radius: 50%;
    display: inline-block;
    margin: 25px 9px
`
