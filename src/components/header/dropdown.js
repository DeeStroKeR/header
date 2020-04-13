import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className ='text-white'
        caret
        color = 'blue'
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        >

            Profile
        </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>My page</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Edit profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Help</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Log out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;
