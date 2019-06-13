import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon16 from '../assets/scss/images/favicon-16x16.png';
import favicon32 from '../assets/scss/images/favicon-32x32.png';

function Seo({ description, meta, title }) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              author
              description
              siteUrl
              keywords
            }
          }
        }
      `}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang: 'en',
            }}
            title={title}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                name: 'siteUrl',
                content: data.site.siteMetadata.siteUrl,
              },
              {
                name: 'google-site-verification',
                content: 'KWDk6S68Rva99YF232KfT0fJcKYNtlMPKLtZRddYWiU',
              },
              {
                name: 'og:url',
                content: data.site.siteMetadata.siteUrl,
              },
              {
                name: 'keywords',
                content: data.site.siteMetadata.keywords,
              },
              { property: 'og:title', content: title },
              { property: 'og:description', content: metaDescription },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              { name: 'twitter:title', content: title },
              { name: 'twitter:description', content: metaDescription },
            ].concat(meta)}
            link={[
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: `${favicon16}`,
              },
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: `${favicon32}`,
              },
            ]}
          />
        );
      }}
    />
  );
}

Seo.defaultProps = { meta: [] };

export default Seo;
