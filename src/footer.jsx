import React from 'react';
import './App.css';
const FooterSection = () => {
    return (
        <>
            <section style={{ backgroundColor: 'rgb(4,4,87)' }}>
                <div className="container py-3">
                    <div className="row d-flex justify-content-center">
                        {/* Address Column */}
                        <div className="col-sm-6 col-md-5 col-lg-3">
                            <div className="info_contact text-white">
                                <h1>Address</h1>
                                <div className="contact_link_box mt-2">
                                    <a className="mx-0 text-decoration-none text-white" href="#">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                            </svg>
                                            Location
                                        </p>
                                    </a>
                                    <a className="mx-0 text-decoration-none text-white" href="#">
                                        <p style={{ color: 'white' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
                                            call +01 1234567890
                                        </p>
                                    </a>
                                    <a className="mx-0 text-decoration-none text-white" href="#">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                            </svg>
                                            Demo@gmail.com
                                        </p>
                                    </a>
                                    <div className="forat d-flex">
                                        <a className="mx-0 text-decoration-none px-1" href="#">
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                                </svg>
                                            </p>
                                        </a>
                                        {/* Repeat similar links for Twitter, LinkedIn, Instagram */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Info Column */}
                        <div className="col-sm-6 col-md-5 col-lg-3">
                            <div className="info-detail mt-2 text-white">
                                <h4>INFO</h4>
                                <p className="pt-2 lh-2">necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
                            </div>
                        </div>
                        {/* Links Column */}
                        <div className="col-sm-6 col-md-5 col-lg-2">
                            <div className="info-detail text-white">
                                <h3>Links</h3>
                                <div className="info-links p-2">
                                    <a className="text-decoration-none text-white" href="#">Home</a>
                                </div>
                                <div className="info-links p-2">
                                    <a className="text-decoration-none text-white" href="#">ABOUT</a>
                                </div>
                                <div className="info-links p-2">
                                    <a className="text-decoration-none text-white" href="#">SERVICE</a>
                                </div>
                                <div className="info-links p-2">
                                    <a className="text-decoration-none text-white" href="#">WHY US</a>
                                </div>
                                <div className="info-links p-2">
                                    <a className="text-decoration-none text-white" href="#">TEAM</a>
                                </div>
                            </div>
                        </div>
                        {/* Subscribe Section */}
                        <div className="col-sm-6 col-md-5 col-lg-3 mt-1">
                            <div className="info_section">
                                <h4 className="text-white">SUBSCRIBE</h4>
                                <form action="#">
                                    <input type="text" placeholder="ENTER EMAIL" />
                                    <button type="submit" style={{ borderRadius: '0%' }} className="btno1 px-5">
                                        <h4>Subscribe</h4>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid text-center">
                <p className="py-sm-3 py-lg-1 my-5">
                    © <span id="displayyear">2024</span> All Rights Reserved By Yuvan Template Ltd
                </p>
            </div>
        </>
    );
};

export default FooterSection;
