import React from "react";
import "./TopMenuBar.css";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

function TopMenuBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/" className="navbar">
        <img src="facebook.png" className="w-10 lg:ml-7" alt="facebook" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="pr-2 pt-3">
          <img
            src="search.png"
            className="hover:cursor-pointer w-6"
            alt="search"
          />
        </div>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="profile.png"
              rounded={true}
              className="border border-blue-500 rounded-full lg:mr-5 w-10"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Nugie Jaya Nugraha</span>
            <span className="block truncate text-sm font-medium">
              jayanugie14@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          active={true}
          className="text-sm font-bold border-b-2 border-sky-500"
        >
          Home
        </Navbar.Link>
        <Navbar.Link className="text-sm" disabled>
          Notification
        </Navbar.Link>
        <Navbar.Link className="text-sm" disabled>
          Watch
        </Navbar.Link>
        <Navbar.Link className="text-sm" disabled>
          Marketplace
        </Navbar.Link>
        <Navbar.Link className="text-sm" disabled>
          Groups
        </Navbar.Link>
        <Navbar.Link className="text-sm" disabled>
          Messenger
        </Navbar.Link>
        <Navbar.Link className="text-sm flex" disabled>
          Live
        </Navbar.Link>

        {/* NOTES
        BISA PAKE FLEX COL UNTUK MENAMBAH BAR DI ATAS ATAU TITIK MERAH DI BAWAH */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopMenuBar;
