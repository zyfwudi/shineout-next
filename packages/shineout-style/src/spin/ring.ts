export default {
  margin: 'auto',
  position: 'relative',
  borderStyle: 'solid',
  borderColor: '#197AFA',
  borderRadius: '50%',
  animation: '$ring 1s ease-in-out infinite',
  borderTopColor: 'transparent',
  '&::before': {
    position: 'absolute',
    content: '" "',
    background: '#197AFA',
    width: '1em',
    height: '1em',
    borderRadius: '50%',
    top: '5%',
    left: '8%',
  },
  '&::after': {
    position: 'absolute',
    content: '" "',
    background: '#197AFA',
    width: '1em',
    height: '1em',
    borderRadius: '50%',
    top: '5%',
    right: '8%',
  },
};
