import React from "react";
import "./Monitor.css";
import { CgProfile } from "react-icons/cg";
import { FiPhoneCall, FiMonitor, FiEye, FiSettings } from "react-icons/fi";
import { BsDashCircleDotted } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import MonitorPhoto from "./monitor.jpg";

const Monitor = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <h1>SHARANYA</h1>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="navbar-right">
          <CgProfile />
          <FiPhoneCall />
        </div>
      </div>

      <div className="secondary-navbar">
        <h3>Monitor</h3>
      </div>
      <div className="body">
        <div className="left-body">
          <ul>
            <li>
              <h1>
                <FiMonitor />
              </h1>
              <label>
                <a href="/dashboard">Dashboard</a>
              </label>
            </li>

            <li>
              <h1>
                <BsDashCircleDotted />
              </h1>
              <label>
                <a href="/detect">Detect</a>
              </label>
            </li>
            <li>
              <h1>
                <BiLockAlt />
              </h1>
              <label>
                <a href="/protect">Protect</a>
              </label>
            </li>
            <li>
              <h1>
                <FiEye />
              </h1>
              <label>
                <a href="/monitor">Monitor</a>
              </label>
            </li>
            <li>
              <h1>
                <FiSettings />
              </h1>
              <label>
                <a href="/setting">Setting</a>
              </label>
            </li>
          </ul>
        </div>
        <div className="main-monitor">
          <img src={MonitorPhoto} className="monitor-photo" />
        </div>
      </div>
    </>
  );
};

export default Monitor;
