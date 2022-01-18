import React, { useState } from 'react';
import styles from './Phrase.module.scss';
const Phrase = ({ num, content, onClick }: any) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const handleOnclick = (id: number) => {
    setSelectedOption(id);
  };
  const styleHandler = (
    isActive: boolean,
    inActiveStyles: any,
    activeStyles: any
  ) => {
    if (isActive) return activeStyles;
    return inActiveStyles;
  };
  return (
    <div
      className={styleHandler(
        selectedOption === num,
        styles.main_container,
        styles.active
      )}
      onClick={() => handleOnclick(num)}
    >
      <div
        className={styleHandler(
          selectedOption === num,
          styles.num,
          styles.num_active
        )}
      >
        <h4>{num}</h4>
      </div>
      <div
        className={styleHandler(
          selectedOption === num,
          styles.content,
          styles.content_active
        )}
      >
        <h3>{content}</h3>
      </div>
    </div>
  );
};

export default Phrase;
