export const docSize = {
  get width() {
    return document.documentElement.clientWidth || document.body.clientWidth;
  },
  get height() {
    return document.documentElement.clientHeight || document.body.clientHeight;
  },
};
export const docScroll = {
  get top() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },
  get left() {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
  },
  set top(value) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  },
  set left(value) {
    document.documentElement.scrollLeft = value;
    document.body.scrollLeft = value;
  },
};

export function isInDocument(element: HTMLElement | null) {
  if (element && 'isConnected' in element) {
    return element.isConnected;
  }
  return document.documentElement.contains(element);
}
