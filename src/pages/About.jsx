import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our website! We are passionate about delivering quality solutions that
          make a difference. Our mission is to build reliable and user-friendly applications that
          solve real-world problems.
        </p>
        <p className="text-lg mb-4">
          This project is developed using modern web technologies like <strong>React</strong> and <strong>React Router</strong> to
          demonstrate the power of single-page applications. We believe in clean code, efficient design, and continuous learning.
        </p>
        <p className="text-lg">
          Thank you for visiting our site. If you have any questions or feedback, feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default About;
