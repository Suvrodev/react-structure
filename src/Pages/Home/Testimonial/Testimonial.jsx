import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  //   console.log("Testimonials: ", testimonials);
  //   console.log("Testimonials length: ", testimonials.length);

  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [testimonials]);

  const handleStart = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handleMove = (e) => {
    if (startX.current === null) return;

    const x = e.clientX || e.touches[0].clientX;
    const deltaX = x - startX.current;

    if (deltaX > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      startX.current = null;
    } else if (deltaX < -50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      startX.current = null;
    }
  };

  const handleEnd = () => {
    startX.current = null;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-10">Testimonial</h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-10">
          OUR SATISFIED CUSTOMERS FEEDBACK
        </h1>
      </div>

      <div
        className="testimonial-container  "
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div
          className="testimonial-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <TestimonialCard
                testimonial={testimonial}
                className="testimonial-image"
              ></TestimonialCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
