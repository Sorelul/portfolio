import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsFillFolderFill } from "react-icons/bs";
const about = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div class="about__cards">
                        <div class="about__card">
                            <FaAward class="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </div>

                        <div class="about__card">
                            <FaUsers class="about__icon" />
                            <h5>Freelancing clients</h5>
                            <small>3</small>
                        </div>

                        <div class="about__card about__card-full-row">
                            <BsFillFolderFill class="about__icon" />
                            <h5>Project</h5>
                            <small>20+ Completed</small>
                        </div>
                    </div>

                    <p>
                        As a recent graduate from the Faculty of Computer Science in Constanta, with a bachelor's
                        degree, I bring over 2 years of experience in both frontend and backend development. My
                        expertise lies in working with frameworks such as ReactJs, NodeJs, and CodeIgniter 3. With a
                        strong foundation in computer science, I have acquired the skills necessary to design and
                        implement robust and efficient web applications. Throughout my academic and professional
                        journey, I have demonstrated a passion for creating seamless user experiences, leveraging my
                        expertise in frontend frameworks like ReactJs. Additionally, my proficiency in backend
                        frameworks such as NodeJs and CodeIgniter 3 enables me to build scalable and secure server-side
                        components. With a dedication to staying up-to-date with the latest technologies and a proven
                        track record of delivering high-quality projects, I am well-equipped to contribute effectively
                        to any development team.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default about;
