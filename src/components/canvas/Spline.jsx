import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const containerRef = useRef();
  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Spline scene="https://prod.spline.design/t1N871HE9-H69uJ8/scene.splinecode" />
      {/* Add any other content or controls here */}
    </div>
  );
}