import React from 'react';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.ExternalSlice} ExternalSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExternalSlice>} ExternalProps
 * @param { ExternalProps }
 */
const External = ({ slice }) => (
  <section>
    <span className='title'>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.embed.html
      }}
    />
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default External;
