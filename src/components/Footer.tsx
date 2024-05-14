import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaRegCopyright, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import FormModal from "./FormModal";
import { Link } from "@yext/sites-components";

interface FooterProps {
  data: any;
  templateData: any;
}

// const year = new Date().getFullYear();

const Footer = ({ data, templateData }: FooterProps) => {
  const { mainPhone } = data || {};

  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <footer>
        <Container>
          <Row>
            <Col xs={12} lg={3} className="justify-content-center d-flex justify-content-lg-start">
              <div className='logo-wrap'>
                <a href='#' className='d-block mb-3' style={{width: 100}}>
                  {/* <img alt='Logo' src={`/src/assets/images/smart_hvac.png`} className='footer_logo'></img> */}
                  <img width={100} height={'auto'} src={data?.logo?.image?.url} className='footer_logo'></img>
                </a>
              </div>
            </Col>
            <Col lg={6} className="justify-content-center align-items-center d-flex mb-3">
              <Link href={`tel:${mainPhone}`}>
                <Button className="btn-lg btn-cus" variant="outline-secondary">
                  Call {mainPhone}
                </Button>
              </Link>
              {/* <a className="mx-2">
              </a> */}
              <Button className="btn-lg btn-cus mx-2" variant="success" onClick={() => toggleModal()}>
                Get a Free Estimate
              </Button>
              <Link href={templateData?.c_reviewLink}>
                <Button className="btn-lg btn-cus" variant="success">
                  Write a review
                </Button>
              </Link>
            </Col>
            <Col lg={3} className="justify-content-center justify-content-lg-end d-flex footer-social-icons align-items-center mb-3">
              <ul>
                {templateData?.instagramHandle &&
                  <li>
                    <a href={templateData?.instagramHandle}>
                      <FaTwitter />
                    </a>
                  </li>
                }
                {templateData?.twitterHandle && 
                  <li>
                    <a href={templateData?.twitterHandle}>
                      <FaInstagram/>
                    </a>
                  </li>
                }
                {templateData?.facebookPageUrl &&
                  <li>
                    <a href={templateData?.facebookPageUrl}>
                      <FaFacebook/>
                    </a>
                  </li>
                }
                {templateData?.linkedInUrl &&
                  <li>
                    <a href={templateData?.linkedInUrl}>
                      <FaLinkedin/>
                    </a>
                  </li>
                }
                {templateData?.youTubeChannelUrl &&
                  <li>
                    <a href={templateData?.youTubeChannelUrl}>
                      <FaYoutube/>
                    </a>
                  </li>
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <Row className='text-center copyright mb-5'>
        <Col>
          <Container className="custom-flex justify-content-center align-items-center footer-link">
            <p>
              <FaRegCopyright/>
              {templateData?.c_copyrightText}
            </p>
            <a href={templateData?.c_privacyPolicy}>Privacy Policy</a>
            <a href={templateData?.c_termsAndCondition}>Terms of Service</a>
            <a href={templateData?.c_cookiesSettings}>Cookies Settings </a>
          </Container>
        </Col>
      </Row>
      <FormModal showModal={showModal} hideModal={() => toggleModal()} />
    </React.Fragment>
  );
};

export default Footer;
