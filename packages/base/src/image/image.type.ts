import React from 'react';
import { BaseImageProps } from '@sheinx/hooks';
import { ImageClasses } from '@sheinx/shineout-style';
import { CommonType } from '../common/type';

export type MagnifyPositionType = 'left' | 'right' | 'center';

export type JssStyleType = {
  image?: () => ImageClasses;
};

export interface ImageGroupClasses {
  group: string;
}

export type Image = {
  src?: string;
  thumb?: string;
  key?: number | string;
};

export interface ImageGalleryProps {
  jssStyle?: JssStyleType;
  images: Image[];
  onClose: () => void;
  current: number;
}

export interface ImageMagnifyProps {
  src?: string;
  position: MagnifyPositionType;
  maxWidth: number;
  maxHeight: number;
  lockScroll: (isLock: boolean) => void;
  className?: string;
}
export interface ImageBaseProps
  extends BaseImageProps,
    Pick<CommonType, 'style' | 'className'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onError' | 'placeholder'> {
  jssStyle?: JssStyleType;
  renderImage?: (imageEl: React.ReactNode) => React.ReactElement;
  renderError?: (errorEl: React.ReactNode) => React.ReactElement;
  renderWrapper?: (wrapperEl: React.ReactNode) => React.ReactElement;
  renderPlaceholder?: (placeholderEl: React.ReactNode) => React.ReactElement;
  renderInnerWrapper?: (innerWrapperEl: React.ReactNode) => React.ReactElement;
  componentRef?: (instance: { preview: () => void }) => void;
}

export type ImageProps = ImageBaseProps;
