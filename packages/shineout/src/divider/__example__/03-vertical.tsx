/**
 * cn - 垂直分割线
 *   -- 使用 mode="vertical" 设置为行内的垂直分割线。
 * en - Vertical
 *  --  Use type="vertical" make it vertical.
 */
import React from 'react';
import { Divider } from 'shineout';

const App: React.FC = () => (
  <div style={{ fontSize: 12 }}>
    <span>Left</span>
    <Divider mode='vertical'>H</Divider>
    <span>Center</span>
    <Divider mode='vertical' />
    <span>Right</span>
  </div>
);

export default App;
