/**
 * cn - 受控
 *    -- 传递value, onChange使组件受控
 * en - Controlled
 *    -- Pass value and onChange props to make the component controlled
 */

import React, { useState } from 'react';
import { EditableArea, TYPE } from 'shineout';

type EditableAreaProps = TYPE.EditableArea.Props;
type EditableAreaValue = EditableAreaProps['value'];

const App: React.FC = () => {
  const [value, setValue] = useState<EditableAreaValue>('');

  return (
    <EditableArea
      width={400}
      bordered
      value={value}
      placeholder='Input something'
      onChange={(val) => setValue(val)}
      onBlur={() => console.log('EditableArea: onBlur')}
    />
  );
};

export default App;
