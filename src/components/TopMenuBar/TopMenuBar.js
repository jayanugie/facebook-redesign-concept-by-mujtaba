import React from "react";
import "./TopMenuBar.css";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

function TopMenuBar() {
  return (
    <div className="sticky top-0">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/" className="navbar">
          <img src="/facebook.png" className="w-10 lg:ml-7" alt="facebook" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="pr-2 pt-3">
            <img
              src="/search.png"
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
          <Navbar.Link href="/" className="text-sm" active={true}>
            <div className="border-b-4 border-blue-600 rounded-md bg-blue-600 relative md:bottom-6 lg:bottom-6 bottom-2"></div>
            <p className="relative bottom-1 font-bold">Home</p>
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
            <p>Messenger</p>
            <div className="border border-red-700 rounded-full bg-red-700 w-1 h-1 relative left-9 top-1"></div>
          </Navbar.Link>
          <Navbar.Link className="text-sm" disabled>
            <p>Live</p>
            <div className="border border-red-700 rounded-full bg-red-700 w-1 h-1 relative left-3 top-1"></div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenuBar;
