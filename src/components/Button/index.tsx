import type { MouseEventHandler, MutableRefObject } from 'react';
import { forwardRef } from 'react';

import { ButtonText, ContainerAsAnchor, ContainerAsButton } from './styles';
import type { Props } from './types';

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function ButtonElement(
    {
      href,
      onClick,
      disabled,
      leftIcon,
      rightIcon,
      type,
      link,
      variant,
      className,
      children,
    },
    ref,
  ) {
    const commonContent = (
      <>
        {!!leftIcon && leftIcon}
        {children && (
          <ButtonText
            $link={link}
            $hasLeftIcon={!!leftIcon}
            $hasRightIcon={!!rightIcon}
          >
            {children}
          </ButtonText>
        )}
        {!!rightIcon && rightIcon}
      </>
    );

    if (href) {
      return (
        <ContainerAsAnchor
          ref={ref as MutableRefObject<HTMLAnchorElement>}
          href={href}
          className={className}
          $link={link}
          $variant={variant}
        >
          {commonContent}
        </ContainerAsAnchor>
      );
    }
    return (
      <ContainerAsButton
        onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
        ref={ref as MutableRefObject<HTMLButtonElement>}
        disabled={disabled}
        className={className}
        $link={link}
        type={type}
        $variant={variant}
      >
        {commonContent}
      </ContainerAsButton>
    );
  },
);

export default Button;
