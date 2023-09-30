import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CodeIgniter 3</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Codeigniter 3 </h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>C#</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>C/C++</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MySql</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__other">
                    <h3>Other Tools</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Wordpress</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Elementor</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>GravityZone</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Canva</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Figma</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
