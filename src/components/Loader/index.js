import React from 'react';
import { css } from '@emotion/core';
import PulseLoader from 'react-spinners/PulseLoader';
import './index.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
       return (
        <div className="sweet-loading">
          <PulseLoader
            css={override}
            className='loader'
            size={15}
            color={'#FFF6BB'}
            // loading={this.state.loading}
          />
        </div>
      );
  };
export default Loader;