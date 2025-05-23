import { useState } from 'react';

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className='accordian'>
      <button
        style={{
          width: '90%',
          height: '70px',
          position: 'relative',
          textAlign: 'left',
          padding: '4px',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '5%',
        }}
        onClick={toggle}
        type='button'
      >
        <div className='accordian-button'>
          <h3>{props.title}</h3>
        </div>
        <div className={`accordian-image ${isShowing && 'accordian-image-up'}`}>
          <img src='/arrow.svg' />
        </div>
      </button>

      <h4
        className={isShowing ? 'accordian-answer' : 'accordian-answer-hidden'}
        style={{
          // display: isShowing ? "block" : "none",
          marginLeft: '5%',
          marginRight: '5%',
          fontFamily: 'Raleway',
          fontWeight: '400',
          textAlign: 'left',
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
