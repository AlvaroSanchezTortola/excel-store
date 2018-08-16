import React from 'react';
import ReactVivus from 'react-vivus';
import svg from '../Images/index.svg';
 
const Vivus1 = () => (
  <ReactVivus
    id="image-1"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '210px', width: '210px', display: 'block',   margin: '0 auto' }}
    callback={console.log}
  />
);

const Vivus2 = () => (
  <ReactVivus
    id="image-2"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '210px', width: '210px', display: 'block',   margin: '0 auto' }}
    callback={console.log}
  />
);

const Vivus3 = () => (
  <ReactVivus
    id="image-3"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '210px', width: '210px', display: 'block',   margin: '0 auto' }}
    callback={console.log}
  />
);

const Vivus4 = () => (
  <ReactVivus
    id="image-4"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '210px', width: '210px', display: 'block',   margin: '0 auto' }}
    callback={console.log}
  />
);

const Vivus5 = () => (
  <ReactVivus
    id="image-5"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '210px', width: '210px', display: 'block',   margin: '0 auto' }}
    callback={console.log}
  />
);

const Vivus6 = () => (
  <ReactVivus
    id="image-6"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '210px', width: '210px', display: 'block',   margin: '0 auto' }}
    callback={console.log}
  />
);

export {
  Vivus1, Vivus2, Vivus3, Vivus4, Vivus5, Vivus6,
}