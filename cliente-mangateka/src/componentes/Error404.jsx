import React from 'react'
import MenuBar from './MenuBar'
import { Container, ContainerColumn, ContainerColumnMenu, ContainerRow, StyledTitle } from './style'

export const Error404 = () => {
  return (
    <Container>
      <ContainerColumnMenu>
        <MenuBar></MenuBar>
      </ContainerColumnMenu>
      <ContainerColumn>
        <ContainerRow>
        <StyledTitle>Error404</StyledTitle>
        </ContainerRow>
      </ContainerColumn>
    </Container>

  )
}
