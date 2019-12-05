import React from 'react';
import Img from '../assets/images/tab-1-pic.png';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { generateMedia } from 'styled-media-query';

function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span className="title">
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>
            <br />
            <Link to="/choose-plan">
              <Button className="tab-btn" style={{ marginTop: '2rem' }}>
                try it now
              </Button>
            </Link>
          </div>
          <React.Fragment>
            <img src={Img} alt="" />
          </React.Fragment>
        </div>
      </div>
    </TabContentContainer>
  );
}
export default TabContentOne;
//Media
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px'
});
// Main Content Container
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  .container {
    margin: 0 10%;
  }
  .title {
    margin-top: 2rem;
    ${customMedia.lessThan('smDesktop')`
    font-size: 1.5rem;
    line-height: 1;
  `}
  }
  img {
    width: 100%;
  }
  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 100%;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    `}
  }
`;