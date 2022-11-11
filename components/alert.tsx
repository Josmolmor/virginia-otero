import cn from 'classnames';

import { EXAMPLE_PATH } from '../lib/constants';

import Container from './container';

type AlertProps = {
  preview: boolean;
};

export default function Alert({ preview }: AlertProps) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview
      })}
    >
      <Container>
        <div>
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a href='/api/exit-preview'>Click here</a> to exit preview mode.
            </>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </div>
  );
}
