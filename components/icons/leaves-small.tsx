import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
  className?: string;
};

const Path = styled.path`
  color: ${({ theme }) => theme.colors.brick};
`;

const LeavesSmall: FC<Props> = ({ color, className }) => {
  return (
    <svg
      className={className}
      width='121'
      height='120'
      viewBox='0 0 121 120'
      fill='none'
    >
      <g>
        <Path
          d='M106.292 71.8741C82.4246 54.5066 67.3809 46.0329 85.2458 0.475187C123.787 34.1315 114.375 47.8336 106.292 71.8741Z'
          fill={color || 'currentColor'}
        />
        <Path
          d='M62.5155 48.2238C56.2633 20.3452 54.4979 3.70703 7.67074 2.46223C22.7022 49.6002 38.3133 46.3664 62.5155 48.2238Z'
          fill={color || 'currentColor'}
        />
        <Path
          d='M85.6254 95.665C57.0677 103.13 40.9812 109.403 17.0477 66.7196C67.5049 58.2185 72.1444 74.1814 85.6254 95.665Z'
          fill={color || 'currentColor'}
        />
      </g>
    </svg>
  );
};

export default LeavesSmall;
