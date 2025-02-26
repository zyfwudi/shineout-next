import token from '@sheinx/theme';
import { JsStyles } from '../jss-style';

export type RateClasses = {
  wrapper: string;
  inner: string;
  item: string;
  itemBg: string;
  itemFront: string;
  itemHalf: string;
  itemChecked: string;
  itemCheckedHalf: string;
  text: string;
  itemDisabled: string;
  itemAnimation: string;
};
export type RateClassType = keyof RateClasses;

// const animation = {
//   '@keyframes scale': {
//     '0%': {
//       transform: 'scale(1)',
//     },
//     '80%': {
//       transform: 'scale(1.4)',
//       opacity: 0.8,
//     },
//     '81%': {
//       transform: 'scale(1.2)',
//     },
//     '100%': {
//       transform: 'scale3d(1.2)',
//     },
//   },
// }

const rateStyle: JsStyles<RateClassType> = {
  // ...animation,
  wrapper: {
    display: 'inline-block',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    gap: token.rateGap,
  },
  item: {
    position: 'relative',
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    width: token.rateSize,
    fontSize: token.rateSize,
    lineHeight: 1,
    '&:not($itemDisabled):hover': {
      cursor: 'pointer',
      transform: 'scale(1.2)',
    },
    transition: 'transform .2s cubic-bezier(.34,.69,.1,1)',
  },
  itemBg: {
    display: 'flex',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    transition: 'none',
    color: token.rateBackgroundColor,
  },
  itemFront: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    color: token.rateForntBackgroundColor,
  },
  itemHalf: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden',
    width: '50%',
    opacity: 0,
    color: token.rateForntBackgroundColor,
    '& > svg': {
      width: '1em',
      height: '1em',
    },
  },
  itemChecked: {
    '& $itemFront': {
      opacity: 1,
    },
    '& $itemBg': {
      opacity: 0,
    },
  },
  itemCheckedHalf: {
    '& $itemHalf': {
      opacity: 1,
    },
  },
  text: {
    fontSize: token.rateFontSize,
    color: token.rateFontColor,
    paddingLeft: 10,
  },
  itemDisabled: {},
  itemAnimation: {
    // animation: '$scale 0.2s ease-out',
  },
};

export default rateStyle;
