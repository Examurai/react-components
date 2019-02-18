import { css } from 'styled-components/macro';
import { MEDIA_SIZES } from '../constants/sizes';

const sizer = media =>
  Object.keys(MEDIA_SIZES).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (${media(label)}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  }, {});

/**
 * Миксин для smaller queries
 * @type {{}}
 */
export const smaller = sizer(label => `max-width: ${MEDIA_SIZES[label] - 1}px`);

/**
 * Миксин для bigger queries
 * @type {{}}
 */
export const bigger = sizer(label => `min-width: ${MEDIA_SIZES[label]}px`);
