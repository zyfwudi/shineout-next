/**
 * cn - 进度条状态
 *    -- 内置了四种样式，通过 type 来调用
 * en - Type
 *    -- There are 4 built-in style.
 */
import React from 'react';
import { Progress } from 'shineout';

const App: React.FC = () => (
  <div style={{ width: 400 }}>
    <Progress value={100} type='success' />
    <br />
    <Progress value={90} type='info' />
    <br />
    <Progress value={80} type='warning' />
    <br />
    <Progress value={70} type='danger' />
  </div>
);

export default App;
