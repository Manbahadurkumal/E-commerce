import { MapPin } from "phosphor-react";
import { Phone } from "phosphor-react";
import { Envelope } from "phosphor-react";
import { YoutubeLogo } from "phosphor-react";
import {FacebookLogo} from "phosphor-react";
import {GithubLogo} from "phosphor-react";
import {TwitterLogo} from "phosphor-react";


const Contact = ()=>{
    return(
        <section className="email-detail">
        <div className="container">
            <div className="row email-form">
                <div className="col-lg-12 mb-4">
                    <h2>Leave us message</h2>
                </div>
                <div className="col-lg-6">
                    <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Messege</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                        </div>
                      </form>
                </div>
                <div className="col-lg-6">
                    <div className="d-md-flex mt-3">
                        <MapPin size={32} /><p className="ms-md-3">Infomation technologies building, Victoria Island, Lagos, Nigeria.  </p></div>
                    <div className="phone"> 
                        <a href="tel:+9779746472110"  className="d-md-flex mt-3">
                        <Phone size={32} /><p className="ms-md-3">9746472110</p></a>
                        </div>
                        
                    <div className="email">
                        <a href="mailto:mk9307888@gmail.com" className="d-md-flex mt-3">
                        <Envelope size={32} /><p className="ms-md-3">mk9307888@gmail.com</p></a>
                    </div>
                    <div className="d-md-flex mt-5">
                    <a href="https://www.youtube.com/channel/UC3jDRRg7ggIl2UI8j8Q2SGg"><YoutubeLogo size={32} /></a>
                    <a href="https://github.com/Manbahadurkumal"><GithubLogo size={32} /></a>
                    <a href="https://twitter.com/kumal85586"><TwitterLogo size={32} /></a>
                    <a href="https://www.facebook.com/manishtanki100/"><FacebookLogo size={32} /></a>
                    </div>
                   
                    
                    
                       
                    
                </div>
            </div>
        <button type="submit" className="btn btn-dark email-button mt-3">Send Email</button>
        </div>
    </section>
    )
};
export default Contact