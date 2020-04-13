import React, { Component } from 'react';
import styled from 'styled-components';

const Icons = styled.div`
      width: 80px;
      display: flex;
      justify-content: space-between;
      i {
        color: white;
      }
`; 

export class Notifications extends Component {
  render() {
    return (
        <Icons>
          <a href=""><i class="fas fa-envelope"></i></a>
          <a href=""><i class="fas fa-bell"></i></a>
          <a href=""><i class="fas fa-comments"></i></a>
        </Icons>
    )
  }
}

export default Notifications
