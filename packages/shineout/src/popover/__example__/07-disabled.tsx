/**
 * cn - 禁用元素
 *    -- 当父元素被禁用，可以将 Popver 和禁用元素置于同一层级，并用元素将他们包裹
 * en - Disabled
 *    -- When the parent element is disabled, you can place the Popver and the disabled element in the same hierarchy and wrap them with the element
 */
import React from 'react';
import { Button, Popover } from 'shineout';

const style: React.CSSProperties = { display: 'inline-block' };
const popoverStyle: React.CSSProperties = { padding: '8px 16px' };

const App: React.FC = () => (
  <div style={style}>
    <Popover style={popoverStyle}>Disabled parent</Popover>

    <Button disabled>Disabled</Button>
  </div>
);

export default App;
