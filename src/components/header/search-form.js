import React, { Component } from 'react';

import styled from 'styled-components';

const Form =styled.div`
position: relative;
&:before {
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f002";
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  top: 50%;
  transform: translateY(-50%);
  left 10px;
  color: white;
}
    width 300px;
    input {
      width: 300px;
      height: 40px;
      background: transparent;
      outline: none;
      border: 2px solid white;
      border-radius: 25px;
      padding: 0 30px;
      font-size: 24px;
      }
      input:focus {
        background: white;
      }
`;
export class SearchForm extends Component {
  render() {
    return (
      <Form>
        <input type="text"/>
      </Form>
    )
  }
}

export default SearchForm;
