import React from "react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import "../Footer/footer.css"
import { Zoom } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {

    return (
        <footer className="footer-dark" style={{ marginTop: "50px" , marginBottom:"0px" }}>
            <div className="profiles">
                <div className="icons" style={{justifyContent: 'center'}}>
                    <Zoom>
                    {/* <p><b> @RAKINE </b>
                           
                        </p> */}
                        
                        <span>
                            <a href="https://github.com/ayoubrakine">
                                <AiFillGithub />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="https://www.linkedin.com/in/ayoub-rakine-112220249/">
                                <AiFillLinkedin />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="https://m.facebook.com/people/Ayoub-Rakine/100013032752247/?comment_id=Y29tbWVudDoxMTc1OTE0NTA2MTY5NTc4XzEyMTkzNDYyODUxNTk3MzM%3D">
                                <BsFacebook />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="https://twitter.com/ayoubrakine">
                                <AiFillTwitterCircle />
                            </a>
                        </span>
                    </Zoom>
                </div>
            </div>
            
        </footer>
    );
}
