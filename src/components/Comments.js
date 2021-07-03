import React from 'react'
import styled from 'styled-components'

export const Comments = () => {
    return (
        <SectionWrapper>
            <NComments>View all n comments</NComments>
            <Preview>
                <CommentText><Username>fizzbuzz</Username>Lorem ipsum dolor sit amet!</CommentText>
                <CommentText><Username>foobar</Username>Aenean euismod quam sit amet diam fermentum ullamcorper :) </CommentText>
            </Preview>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
    margin: 0 12px;
`

const NComments = styled.p`
    font-size: 15px;
    color: grey;
    margin-top: 5px;
    margin-bottom: 0;
`

const Preview = styled.div`
    display: flex;
    flex-direction: column;
`

const CommentText = styled.p`
    margin: 5px 0 0 0;
    font-size: 16px;
`

const Username = styled.span`
    font-weight: bold; 
    margin-right: 3px; 
    display: inline;
`