import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
  className?: string;
};

const Path = styled.path`
  color: ${({ theme }) => theme.colors.brick};
`;

const LeavesMedium: FC<Props> = ({ color, className }) => {
  return (
    <svg
      className={className}
      width='150'
      height='198'
      viewBox='0 0 150 198'
      fill='none'
    >
      <g>
        <Path
          d='M30.4001 91.2291C49.6266 111.623 62.179 122.169 37.5167 161.55C7.45329 123.382 18.6402 112.246 30.4001 91.2291Z'
          fill={color || 'currentColor'}
        />
        <Path
          d='M70.5491 127.529C62.161 153.329 55.549 167.775 93.1984 191.46C103.738 145.678 89.4202 140.762 70.5491 127.529Z'
          fill={color || 'currentColor'}
        />
        <Path
          d='M39.8999 52.4507C66.8419 60.1765 83.0188 62.8399 81.9076 109.292C36.5751 91.8116 40.5124 76.526 39.8999 52.4507Z'
          fill={color || 'currentColor'}
        />
        <Path
          d='M73.5846 35.6211C100.922 29.4372 116.386 23.9922 137.753 65.254C89.5999 71.7299 85.7005 56.4346 73.5846 35.6211Z'
          fill={color || 'currentColor'}
        />
      </g>
    </svg>
  );
};

export default LeavesMedium;
