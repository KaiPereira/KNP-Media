import React from "react"
import Link from "next/link"

export default function Nav(props) {
    const [dropdownState, changeDropdownState] = React.useState(true)

    function changeDropdownStateFunction() {
        changeDropdownState(!dropdownState)
    }

    if (typeof window !== "undefined") {
        !dropdownState ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"
    }

    return (
        <>
            <nav>
                <Link href="/">
                    <img alt="Nav Logo" src="/KNP Media 1.svg" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave} className="navLogo" />
                </Link>
                <div className="navigationElements">
                    <Link href="/">
                        <a className="navigationElement" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>Home</a>
                    </Link>
                    <Link href="#services">
                        <a className="navigationElement" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>Services</a>
                    </Link>
                    <Link href="#about">
                        <a className="navigationElement" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>About</a>
                    </Link>
                    <Link href="#contact">
                        <button onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>Get In Touch</button>
                    </Link>
                </div>
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={dropdownState ? "navHamburger" : "navHamburger navHamburgerOpen"} onClick={changeDropdownStateFunction} onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                    <rect width="27" height="4" rx="2"/>
                    <rect y="18" width="27" height="4" rx="2"/>
                    <rect x="11" y="9" width="16" height="4" rx="2"/>
                </svg>
            </nav>
            <div className={dropdownState ? "dropdown dropdownOpen" : "dropdown dropdownClosed"}>
                <div className="dropdownElements">
                    <Link href="/">
                        <a className="dropdownElement" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave} onClick={changeDropdownStateFunction}>Home</a>
                    </Link>
                    <Link href="#services">
                        <a className="dropdownElement" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave} onClick={changeDropdownStateFunction}>Services</a>
                    </Link>
                    <Link href="#about">
                        <a className="dropdownElement" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave} onClick={changeDropdownStateFunction}>About</a>
                    </Link>
                    <Link href="#contact">
                        <a className="dropdownElement" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave} onClick={changeDropdownStateFunction}>Contact Us</a>
                    </Link>
                    <div className="dropdownElementsSocials">
                        <a href="https://www.linkedin.com/company/knp-media" target="_blank" rel="noreferrer noopener" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}