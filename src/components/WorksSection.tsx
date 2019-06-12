import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading } from 'rebass';
import Gallery from './Gallery';
import Section, { Props } from './Section';

const WorksSection = (props: Props) => (
  <Section {...props}>
    <StaticQuery
      query={graphql`
        {
          allWorksYaml {
            edges {
              node {
                title
                image {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                      originalImg
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Gallery
          images={data.allWorksYaml.edges.map(({ node }: any) => ({
            id: node.image.id,
            ...node.image.childImageSharp.fluid,
            caption: `${node.title}`,
          }))}
          itemsPerRow={[2, 3]}
        />
      )}
    />
  </Section>
);

export default WorksSection;
