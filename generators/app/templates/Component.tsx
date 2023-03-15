import React, { Component } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
`

interface <%= name %>Props {
  children?: React.ReactNode
}

function <%= name %> ({ children }: <%= name %>Props) {
    return (
        <Root>
          {children}
        </Root>
    )
}

<%= name %>.defaultProps = {
  value: 'It\'s a me, <%= name %>!'
}

export default <%= name %>
