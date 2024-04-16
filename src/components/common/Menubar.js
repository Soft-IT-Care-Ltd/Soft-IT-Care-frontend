import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useRouter} from "next/router";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiBars3BottomRight } from "react-icons/hi2";

const menuItem = [
    {
        name: "Home",
        url: "/",
        target: "home",
    },
    {
        name: "About Us",
        url: "#about-us",
        target: "about-us",
    },
    {
        name: "Our Ventures",
        url: "#our-ventures",
        target: "our-ventures",
    },
    {
        name: "Life at SITC",
        url: "#life-at-sitc",
        target: "life-at-sitc",
    },
    {
        name: "Careers",
        url: "#career",
        target: "career",
    },
    {
        name: "Contact Us",
        url: "#contact-us",
        target: "contact-us",
    },
];

const Menubar = () => {
    const router = useRouter();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (target) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        handleClose();
    };

    return (
        <>
            <nav className="menubar">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="menubar__content d_flex d_justify">
                                {/* logo */}
                                <div className="menubar__logo">
                                    <Link href='/'>
                                        <Image
                                            src="/images/logo.webp"
                                            height={60}
                                            width={140}
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                {/* item */}
                                <div className="menu__item">
                                    {/*desktop__menu*/}
                                    <ul className='desktop__menu'>
                                        {menuItem.map((item, key) => (
                                            <li key={key}>
                                                <Link
                                                    href={item.url}
                                                    className={
                                                        router.pathname == item.url ? "active" : ""
                                                    }
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className='mobile__menu'>

                                        <Button onClick={handleShow}>
                                            <HiBars3BottomRight />
                                        </Button>

                                        <Offcanvas show={show} onHide={handleClose} className='mobile__menu__popup'>
                                            <Offcanvas.Header closeButton> </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                {menuItem.map((item, key) => (
                                                    <li key={key}>
                                                        <Link
                                                            href={item.url}
                                                            className={
                                                                router.pathname == item.url ? "active" : ""
                                                            }
                                                            onClick={() => handleClick(item.target)} 
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </Offcanvas.Body>
                                        </Offcanvas>

                                    </ul>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    );
};

export default Menubar;
