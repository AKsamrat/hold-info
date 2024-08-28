import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import telegram from '../assets/paper.png';

const Navbar = (setDarkMode, darkMode) => {
  const { logOut, user } = useContext(AuthContext);
  const [time, setTime] = useState(60);
  const [degree, setDegree] = useState(0);
  // console.log(user);
  const [theme, setTheam] = useState(localStorage.getItem('theme') || 'light');
  const handleSignout = () => {
    logOut().then(toast('successfully Logged Out')).catch();
  };
  const handleToogle = e => {
    if (e.target.checked) {
      setTheam('dark');
      setDarkMode(!darkMode);
    } else {
      setTheam('light');
    }
  };
  useEffect(() => {
    // Only run the interval if the time is greater than 0
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1); // Decrement time by 1 every second
      }, 1000);
      const temp = time * (10 / 6) * 3.6;
      setDegree(temp);
      // Cleanup the interval when the component unmounts or when time changes
      return () => clearInterval(timerId);
    } else {
      setTime(60);
    }
  }, [time]);
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const navlink = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/updateProfile'}>Update Profile </NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}> Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  mt-6 bg-[#191D28]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <Link to={'/'} className=" text-xl">
            <img
              className="w-64"
              src="	https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <select className="select select-accent w-full max-w-xs">
            <option disabled selected>
              INR
            </option>
            <option>INR</option>
          </select>
          <select className="select select-accent w-full max-w-xs mx-2">
            <option disabled selected>
              {' '}
              REQ
            </option>
            <option>REQ</option>
            <option>BTC</option>
            <option>ZRX</option>
            <option>BAT</option>
            <option>ZIL</option>
            <option>EOS</option>
            <option>TRX</option>
            <option>ETH</option>
            <option>XRP</option>
            <option>NULS</option>
          </select>
        </div>
        <button className="btn  border-accent">BUY USDT </button>
        <div className="navbar-end ">
          {/* time section =========================== */}
          <div
            style={{
              background: `conic-gradient(#50c0bc 0deg ${degree}deg, white ${degree}deg 360deg)`,
              position: 'relative',
              width: '35px',
              height: '35px',
              display: 'grid',
              placeItems: 'center', // Corrected 'place'
              borderRadius: '50%', // Use camelCase for CSS properties
            }}
          >
            <div className="ProgressBarChild">
              <span className="TimeBar">{time}</span>
            </div>
          </div>

          {/* telegram button  */}

          <button className="bg-[#50c0bc] text-[#dddddd] flex justify-center items-center rounded-xl py-2 px-2 mx-2 gap-2 ">
            <img
              className="w-5 bg-transparent object-contain"
              src={telegram}
              alt="telegram"
            ></img>{' '}
            Connect Telegram
          </button>

          {/* theme mode toggle button ==================== */}

          <div className="dropdown dropdown-end flex items-center">
            {/* <div className=" w-[50px]">
              <label className="cursor-pointer grid place-items-center">
                <input
                  onChange={handleToogle}
                  type="checkbox"
                  // value="synthwave"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div> */}
            <input
              onChange={handleToogle}
              type="checkbox"
              className="toggle toggle-success border-none "
              defaultChecked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
