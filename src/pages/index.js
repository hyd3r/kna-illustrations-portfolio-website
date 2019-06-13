import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import WorksSection from '../components/WorksSection';
import ConceptSection from '../components/ConceptSection';
import About from '../components/About';
import Headroom from 'react-headroom';
import { Link } from 'gatsby';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { awe: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    this.setState(prevState => ({
      awe: num,
    }));
  }
  render() {
    return (
      <Layout handleClick={this.handleClick}>
        <Helmet
          title="KNA - Illustrations"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />
        <Headroom pinStart={700} disableInlineStyles style={{ zIndex: 5 }}>
          <center className="nav">
            <ul className="link">
              {/* <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a> */}
              <li className={this.state.awe === 1 ? 'link active' : 'link'}>
                <Link
                  data-easing="easeInOutQuad"
                  to="#section"
                  onClick={() => this.handleClick(1)}
                >
                  Illustrations
                </Link>
              </li>
              <li className={this.state.awe === 2 ? 'link active' : 'link'}>
                <Link
                  data-easing="easeInOutQuad"
                  to="#section"
                  onClick={() => this.handleClick(2)}
                >
                  Concept
                </Link>
              </li>
              <li className={this.state.awe === 3 ? 'link active' : 'link'}>
                <Link
                  data-easing="easeInOutQuad"
                  to="#section"
                  onClick={() => this.handleClick(3)}
                >
                  About
                </Link>
              </li>
            </ul>
          </center>
        </Headroom>
        <div id="section"></div>
        {this.state.awe === 1 ? (
          <WorksSection variant="dark" className="pad" />
        ) : this.state.awe === 2 ? (
          <ConceptSection variant="light" className="pad" />
        ) : (
          <About />
        )}

        <style jsx="true">
          {`
            .headroom {
              top: 0;
              left: 0;
              right: 0;
              zindex: 1;
            }
            .headroom--unfixed {
              position: relative;
              transform: translateY(0);
            }
            .headroom--scrolled {
              transition: transform 200ms ease-in-out;
            }
            .headroom--unpinned {
              position: fixed;
              transform: translateY(0%);
            }
            .headroom--pinned {
              position: fixed;
              transform: translateY(-100%);
            }
            .nav {
              width: 100%;
              margin: 0;
              top: 0;
              background: #212121;
              color: #ccc;
            }
            li.link {
              height: 100%;
              flex: 1;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px;
              transition: all 0.3s ease-in;
            }
            li.active,
            li.link:hover {
              background: #848484;
              color: #212121;
            }
            ul.link {
              list-style: none;
              display: flex;
              margin: 0;
              padding: 0;
              width: 50%;
              margin: 0;
              top: 0;
              background: #212121;
              color: #ccc;
            }
            .pad {
              margin-left: 5vw;
              margin-right: 5vw;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
