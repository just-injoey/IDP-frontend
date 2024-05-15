import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="top">
      <h1 className="topLeft">Gandhi Digital Archive</h1>
      <ul className="topList">
        <li href="/" className="topListItem">
          <Link to="/">Home</Link>
          {/* Home */}
        </li>
        <li href="#" className="topListItem">
          <Link to="/ngram-search">Search</Link>
        </li>
        <li href="#" className="topListItem">
          Archive
        </li>
        <li href="#" className="topListItem">
          Blog
        </li>
        <li href="#" className="topListItem">
          About
        </li>
      </ul>
    </div>
  );
}
