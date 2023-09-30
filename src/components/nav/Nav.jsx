import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.pageYOffset;

            if (scrollPosition === 0) {
                setActiveNav("#");
            } else {
                sections.forEach((section) => {
                    const navLink = document.querySelector(`a[href="#${section.id}"]`);

                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveNav(`#${section.id}`);
                    }
                });
            }

            // Verificare pentru ultimul link
            if (scrollPosition === pageHeight) {
                setActiveNav(`#${sections[sections.length - 1].id}`);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <a
                href="#"
                onClick={() => {
                    setActiveNav("#");
                }}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiFillHome />
            </a>
            <a
                href="#about"
                className={activeNav === "#about" ? "active" : ""}
                onClick={() => {
                    setActiveNav("#about");
                }}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                className={activeNav === "#experience" ? "active" : ""}
                onClick={() => {
                    setActiveNav("#experience");
                }}
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                className={activeNav === "#portfolio" ? "active" : ""}
                onClick={() => {
                    setActiveNav("#portfolio");
                }}
            >
                <CgWebsite />
            </a>
            <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={() => {
                    setActiveNav("#contact");
                }}
            >
                <RiContactsFill />
            </a>
        </nav>
    );
};

export default Nav;
