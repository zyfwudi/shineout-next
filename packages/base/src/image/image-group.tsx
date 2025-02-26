import React, { Children, cloneElement } from 'react';
import { useImageGroup } from '@sheinx/hooks';
import { ImageClasses } from '@sheinx/shineout-style';
import { ImageGroupProps } from './image-group.type';
import { Image, ImageProps } from './image.type';
import showGallery from './image-event';
import classNames from 'classnames';
import Icons from '../icons';

const ImageGroup = (props: ImageGroupProps) => {
  const { jssStyle, children, target = '_modal', pile, showCount = false, ...rest } = props;
  const { getGroupItemProps, getPileProps } = useImageGroup(props);
  const imageClasses = jssStyle?.image?.() || ({} as ImageClasses);

  const targetSet = pile ? '_modal' : target;
  const shouldPreview = targetSet === '_modal';

  const groupClass = classNames(imageClasses?.group, {
    [imageClasses?.groupPile]: pile,
  });

  // 图片组成员点击事件
  const handleItemClick = (images: Image[], current: number) => {
    if (shouldPreview) {
      showGallery(jssStyle, images, current);
    }
  };

  // 渲染图片组成员
  const renderGroupItem = (Child: React.ReactElement<ImageProps>, index: number) => {
    const groupItemProps = getGroupItemProps(Child, index, { ...rest, onClick: handleItemClick });
    return cloneElement(Child, groupItemProps);
  };

  // 渲染图片总数角标
  const renderGroupCount = () => {
    return (
      <div className={classNames(imageClasses?.groupCount)}>
        {Icons.Pics2}
        <span>{Children.count(children)}</span>
      </div>
    );
  };

  // 渲染堆叠图片
  const renderPile = (Child: React.ReactElement<ImageProps>, index: number) => {
    // 仅渲染第一张，第二张和第三张为占位图
    if (index === 0) return renderGroupItem(Child, index);

    if (index > 2) return null;

    const pileProps = getPileProps(Child, index, {
      className: classNames(imageClasses?.groupPileItem),
    });
    return <div key={index} {...pileProps}></div>;
  };

  return (
    <div className={groupClass}>
      {Children.toArray(children).map((child, index) => {
        const Child = child as React.ReactElement<ImageProps>;
        if (pile) {
          return renderPile(Child, index);
        } else {
          return renderGroupItem(Child, index);
        }
      })}
      {showCount && pile && renderGroupCount()}
    </div>
  );
};

export default ImageGroup;
