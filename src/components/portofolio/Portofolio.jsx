import React from "react";
import "./portofolio.css";
import Image1 from "../../assets/portfolio1.png";
import Image2 from "../../assets/portfolio2.png";
import Image3 from "../../assets/portfolio3.png";
import Image4 from "../../assets/portfolio4.png";
import Image5 from "../../assets/portfolio5.png";
import Image8 from "../../assets/portfolio6.png";
import Image6 from "../../assets/portfolio7.png";
import Image7 from "../../assets/portfolio8.png";
import Image9 from "../../assets/wishlistApp.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactGA from "react-ga";

const Portofolio = () => {
    const MySwal = withReactContent(Swal);
    const data = [
        {
            id: 9,
            image: Image9,
            title: "Create and distribute wishlists with an full stack application using ReactJs and NodeJs.",
            github: "https://github.com/Sorelul/SocialMediaApp-FullStack-",
            details:
                "This application uses React and Node technologies to create and manage wishlists. The purpose of the application is to provide users with a friendly and simple experience, helping them organize their wishes and easily share them with friends, always being ready to answer the question: 'What does he/she need? What can I buy for them?'",
            demo: "",
        },
        {
            id: 7,
            image: Image7,
            title: "Social Media application using React,NodeJs,Express and MongoDB",
            github: "https://github.com/Sorelul/SocialMediaApp-FullStack-",
            details:
                "Creating a MERN social media application using React.js, Node.js, and MongoDB. Build a Real-World Project with React Hooks, Context API, Functional React Components, Node.js REST API, Axios and more.",
            demo: "",
        },
        {
            id: 6,
            image: Image6,
            title: "Chat application using React (along with Stream library) and NodeJs",
            github: "https://github.com/Sorelul/ChatApp",
            demo: "",
            details:
                "Building a chat application utilizing React and Node.js, incorporating the Stream library for enhanced functionality and real-time communication.",
        },
        {
            id: 1,
            image: Image1,
            title: "Catch the dot game using JavaScript",
            github: "https://github.com/Sorelul/MiniGameSite",
            demo: "",
            details:
                "Experience the excitement of the 'Catch the Dot' game, developed using JavaScript, where players aim to catch a moving dot within a limited time frame.",
        },
        {
            id: 2,
            image: Image2,
            title: "Student Management using C#",
            github: "https://github.com/Sorelul/student-management",
            demo: "",
            details:
                "Efficiently manage student information and records with a robust Student Management application built using C#, offering comprehensive features to streamline administrative tasks in a college setting.",
        },
        {
            id: 3,
            image: Image3,
            title: "Image Processing Clustering using Python",
            github: "https://github.com/Sorelul/image-processing-clustering",
            demo: "",
            details:
                "Explore the world of image processing and clustering through a Python-based application, empowering users to analyze and group images based on similarities, unlocking valuable insights from visual data.",
        },
        {
            id: 4,
            image: Image4,
            title: "WishList App using ReactJs",
            github: "https://github.com/Sorelul/BootCamp2022",
            demo: "",
            details:
                "Create and manage your personalized WishList with a dynamic ReactJS frontend application, providing an intuitive interface to add, view, and organize your desired items seamlessly.",
        },
        {
            id: 5,
            image: Image5,
            title: "Data Base validation using Java and MySql ",
            github: "https://github.com/Sorelul/Normalization-of-existence-constraints-and-primary-keys",
            demo: "",
            details:
                "Ensure data integrity and accuracy with a Java and MySQL-based application, dedicated to database validation, enforcing rules and constraints to maintain reliable and consistent data within the system.",
        },

        {
            id: 8,
            image: Image8,
            title: "And more other applications available on my GitHub profile",
            github: "https://github.com/Sorelul",
            demo: "",
            details: "",
        },
    ];

    const handleDetailsPopup = (title, details) => {
        MySwal.fire({
            title: <p style={{ fontSize: "20px" }}>{title}</p>,
            icon: "info",
            html: details,
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close',
        });
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: `User clicked on more details for project ${title}`,
        });
    };

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portofolio__container">
                {data.map(({ id, image, title, github, details, demo }) => {
                    return (
                        <article key={id} className={id === 8 ? "portofolio__item__final" : "portofolio__item"}>
                            <div className="portofolio__item-image">
                                <img src={image} alt={title + " " + id} style={{ height: "250px" }} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portofolio__item-cta">
                                {id !== 9 ? (
                                    <a href={github} className="btn" target="_blank" rel="noreferrer">
                                        Github
                                    </a>
                                ) : (
                                    <>
                                        <a
                                            href="https://github.com/Sorelul/Licenta-FrontEnd"
                                            className="btn"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Git - FE
                                        </a>
                                        <a
                                            href="https://github.com/Sorelul/Licenta-BackEnd"
                                            className="btn"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Git -BE
                                        </a>
                                    </>
                                )}
                                {id !== 8 ? (
                                    <a
                                        onClick={() => handleDetailsPopup(title, details)}
                                        className="btn"
                                        rel="noreferrer"
                                    >
                                        Details
                                    </a>
                                ) : (
                                    ""
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portofolio;
