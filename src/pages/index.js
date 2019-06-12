import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import WorksSection from '../components/WorksSection';
import ConceptSection from '../components/ConceptSection';

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
          title="Kheena"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        {this.state.awe === 1 ? (
          <WorksSection variant="dark" className="pad" />
        ) : this.state.awe === 2 ? (
          <ConceptSection variant="light" className="pad" />
        ) : (
          <Banner />
        )}

        <style jsx="true">
          {`
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
