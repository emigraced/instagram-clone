import React from 'react'
import styled from 'styled-components'

export const Comments = () => {
    return (
        <SectionWrapper>
            <Summary ncomments>View all n comments</Summary>
            <Preview>
                <CommentText Comment><CommentText username>fizzbuzz</CommentText>Lorem ipsum dolor sit amet!</CommentText>
                <CommentText Comment><CommentText username>foobar</CommentText>Aenean euismod quam sit amet diam fermentum ullamcorper :) </CommentText>
            </Preview>
            <Summary nhours>n hours ago</Summary>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
    margin: 0 12px;
`

const Summary = styled.p`
    font-size: 15px;
    color: grey;
    margin-top: 5px;
    ${props => props.ncomments ? "margin-bottom: 0;" : null}
    ${props => props.nhours ? "font-size: 10px; margin: 15px 0 20px 0; text-transform: uppercase;" : null}
`

const Preview = styled.div`
    display: flex;
    flex-direction: column;
`

const CommentText = styled.p`
    margin: 5px 0 0 0;
    font-size: 16px;
    ${props => props.username ? "font-weight: bold; margin-right: 3px; display: inline;" : null}
`