import { useEffect, useRef, useState } from 'react';
import './TwoDotCursor.css';

const TwoDotCursor = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const dot1 = useRef({ x: 0, y: 0 });
  const dot2 = useRef({ x: 0, y: 0 });

  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target;
      if (target.closest && (target.closest('button') || target.closest('a'))) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      // Smooth follow logic
      dot1.current.x += (mousePos.current.x - dot1.current.x) * 0.25;
      dot1.current.y += (mousePos.current.y - dot1.current.y) * 0.25;

      dot2.current.x += (mousePos.current.x - dot2.current.x) * 0.12;
      dot2.current.y += (mousePos.current.y - dot2.current.y) * 0.12;

      // Apply styles
      if (dot1Ref.current) {
        dot1Ref.current.style.left = `${dot1.current.x}px`;
        dot1Ref.current.style.top = `${dot1.current.y}px`;
      }
      if (dot2Ref.current) {
        dot2Ref.current.style.left = `${dot2.current.x}px`;
        dot2Ref.current.style.top = `${dot2.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      <div ref={dot1Ref} className="cursor-dot dot1" />
      <div ref={dot2Ref} className={`cursor-dot dot2 ${isHovering ? 'dot2-hover' : ''}`} />
    </>
  );
};

export default TwoDotCursor;
