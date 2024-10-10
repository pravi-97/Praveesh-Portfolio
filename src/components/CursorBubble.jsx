import AnimatedCursor from 'react-animated-cursor';

const CursorBubble = () => {
  return (
    <AnimatedCursor
        innerSize={20}
        outerSize={70}
        color='255, 255, 255'
        outerAlpha={0}
        innerScale={0.6}
        outerScale={1.5}
        outerStyle={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0) 80%)',
          borderRadius: '50%',
          // boxShadow: '0 0 60px rgba(255, 255, 255, 0.2)',
          mixBlendMode: 'exclusion'
        }}
      />
  );
};

export default CursorBubble;
