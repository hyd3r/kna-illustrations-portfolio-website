import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading } from 'rebass';
import Gallery2 from './Gallery2';
import Section, { Props } from './Section2';

const ConceptSection = (props: Props) => (
  <Section {...props}>
    <StaticQuery
      query={graphql`
        {
          allConceptsYaml {
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
        <Gallery2
          images={data.allConceptsYaml.edges.map(({ node }: any) => ({
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

export default ConceptSection;
