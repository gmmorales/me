import React, { useEffect, useState } from "react";
import "./styles/Arts.css";
import { images } from "../data/images";

const Arts = () => {

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(images.map(img => img.category))];

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter(img => img.category === activeFilter);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <section id="arts" className="s-arts target-section">

      <div className="row s-arts__header">
        <div className="column large-12">
          <h1 className="font-500">AI ARTS PORTFOLIO</h1>
          <p className="font-500">
            Concepts, ideas, and visual experiments <br />
            generated with Artificial Intelligence
          </p>

          {/* 🔥 FILTROS */}
          <div className="arts-filters">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      <div className="row arts-grid">
        {filteredImages.map((img) => (
          <div key={img.id} className="column arts-item">

            <div className="arts-item__inner">
              <img src={img.src} alt={img.title} />

              <div className="arts-item__content">
                <h4>{img.title}</h4>
                <p>{img.category}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Arts;