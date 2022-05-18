/* eslint-disable react/jsx-key */
import Link from "next/link"
import FooterStyle from "../styles/Footer.module.css"
import Twitter from "./LogosSVG/Twitter";
import Instagram from "./LogosSVG/Instagram"
import Youtube from "./LogosSVG/Youtube";


const FooterItem = ({ href, text, target }) => {
    return (
        <Link href={href} >
            <a className={FooterStyle.Text} target={target}>
                {text}
            </a>
        </Link>
    )
}


const Footer = () => {

    return (
        <footer className={FooterStyle.footer}>
            <div className={FooterStyle.SubSection}>
                <div className={FooterStyle.content}>
                    <Instagram color={"white"} />
                    <Twitter color={"white"} />
                    <Youtube color={"white"} />
                </div>
            </div>
        </footer>
    )
}

export default Footer