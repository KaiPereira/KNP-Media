import React from "react"
import Link from "next/link"

export default function Footer(props) {
    return (
        <footer>
            <div className="footerElements" style={{margin: props.contactNotActive && "0px"}}>
                <div>
                    <p className="footerElementsContactHeader">Tell Us About Your Project</p>
                    <Link href="mailto:kaipereira2020@gmail.com" target="_blank" rel="noopener noreferrer">
                        <p className="footerElementsContactEmail">kaipereira2020@gmail.com</p>
                    </Link>
                </div>
                <div className="footerElementsSocials">
                    <a href="https://www.linkedin.com/company/knp-media" target="_blank" rel="noopener noreferrer" className="footerElementsSocial" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}