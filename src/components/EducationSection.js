import React, { useState, useRef } from "react";
import "./EducationSection.css";

const certifications = [
  {
    title: "AWS Certified Machine Learning Specialty",
    issued: "Aug 2024",
    expiry: "Aug 2027",
    icon: "/images/aws-logo.png",
    link: "https://www.credly.com",
    details: [
      "Cloud-Native Architecture",
      "Automated Tuning and Query Optimization"
    ],
  },
  {
    title: "AWS Certified Data Analytics Specialty",
    issued: "July 2023",
    expiry: "July 2026",
    icon: "/images/aws-logo.png",
    link: "https://www.credly.com",
    details: [
      "Data Warehousing Design",
      "Data Lake Implementation",
      "ETL/ELT Pipelines",
    ],
  },
  {
    title: "Python PCAP",
    issued: "June 2022",
    icon: "/images/python-logo.png",
    link: "https://www.credly.com",
    details: [
      "Object-Oriented Programming",
      "Python for Web and Data Science",
      "Unit Testing and Debugging",
    ],
  },
  {
    title: "Snowflake Core Pro",
    issued: "March 2024",
    icon: "/images/snowflake-logo.png",
    link: "https://www.credly.com",
    details: [
      "Data Sharing and Security",
      "SQL-Based Query Optimization",
      "Multi-Cluster Warehouses",
    ],
  }
];

const EducationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX || e.touches[0].clientX;
    const difference = startX - currentX;

    if (difference > 50) {
      // Dragged to the left
      handleScroll("right");
      setStartX(currentX);
    } else if (difference < -50) {
      // Dragged to the right
      handleScroll("left");
      setStartX(currentX);
    }
  };

  const handleScroll = (direction) => {
    const totalCerts = certifications.length;

    if (direction === "right") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalCerts);
    } else {
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalCerts) % totalCerts);
    }
  };

  const getCardClass = (index) => {
    const totalCerts = certifications.length;
    if (index === activeIndex) return "active";
    if (index === (activeIndex - 1 + totalCerts) % totalCerts) return "left";
    if (index === (activeIndex + 1) % totalCerts) return "right";
    return "dimmed";
  };

  return (
    <section id="education-section" className="education-section">
      <div className="education-timeline">
        <h2>Education</h2>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Associate in Computer Engineering</h3>
            <p>Cape Peninsula University of Technology (CPUT)</p>
            <span>2017 - 2019</span>
            <p>
              Focused on foundational computer Engineering concepts, programming,
              and software development.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Bachelor in Computer Science</h3>
            <p>University of Wisconsin-Green Bay (UWGB)</p>
            <span>2024 - Present</span>
            <p>
              Current coursework emphasizes Data Science, Artificial
              Intelligence, and Software Engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications Carousel */}
      <div className="certifications-carousel">
        <h2>Certifications</h2>
        <div
          className="carousel-container"
          ref={carouselRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="carousel-wrapper">
          {certifications.map((cert, index) => (
            <div key={index} className={`card ${getCardClass(index)}`}>
              <div className="cert-card">
                <div className="cert-header">
                  <img src={cert.icon} alt={cert.title} />
                  <h3>{cert.title}</h3>
                </div>
                <p>Issued: {cert.issued}</p>
                <ul>
                  {cert.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credly-btn"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="carousel-dots">
        {certifications.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default EducationSection;
