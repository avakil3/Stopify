import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser, faX } from '@fortawesome/free-solid-svg-icons'

class AboutMeModal extends React.Component{
    render(){
        return (
        <div className="about-me-modal-container">
            {/* <div className="card_container"> */}
                <div className="about-me-header">
                    <FontAwesomeIcon icon={faX} onClick={this.props.closeModal}/>
                    <p>Aagam Vakil</p>
                </div>
                <div className="about-me-content">
                    <div className="left-side-container">
                        <img src={window.aagamPic} alt="Aagam Vakil" />
                        <div className="links-container">
                            <a href="https://www.linkedin.com/in/aagamvakil/" target="_blank"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://github.com/avakil3" target="_blank"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://avakil3.github.io/" target="_blank"><FontAwesomeIcon icon={faCircleUser} id='company-icon' /><FontAwesomeIcon/></a>
                        </div>
                    </div>

                    <div className="right-side-container">
                        <p>
                        I'm a New York City-based full-stack software engineer. After spending a few years in venture capital and technology investment banking, 
                        I made the decision to transition into software engineering to build the software I was previously investing in.
                        </p>
                        <br />
                        <p>
                            I graduated from Emory University with dual Bachelor's degrees in Computer Science and Finance. 
                            In March 2022, I completed the 16-week SWE bootcamp App Academy to bolster my technical abilities.
                        </p>
                        <br />
                        <p>You can find my other projects at my portfolio website <a href="https://avakil3.github.io/" target="_blank">here!</a> </p>
                    </div>

                </div>
            
            {/* </div> */}
        </div>
        )
    }
}

export default AboutMeModal