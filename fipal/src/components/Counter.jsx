import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

/**
 * A component that animates a number count-up when it becomes visible in the viewport.
 * @param {object} props - The component props.
 * @param {number} props.end - The final number to count up to.
 * @param {string} [props.suffix] - An optional suffix to display after the number (e.g., 'k', '%').
 */
const Counter = ({ end, suffix = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.1,    // Starts the animation when 10% of the component is visible
  });

  return (
    <span ref={ref}>
      {/* The CountUp component will only render and start animating when 'inView' is true */}
      {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : '0'}
    </span>
  );
};

export default Counter;
