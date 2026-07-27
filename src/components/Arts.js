import React, { useEffect, useState } from "react";
import "./styles/Arts.css";
import { images } from "../data/images";

const Arts = () => {
  const [filter, setFilter] = useState("All");

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  // 🧠 obtener categorías únicas
  const categories = ["All", ...new Set(images.map((img) => img.category))];

  // 🎯 filtrar imágenes
  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section id="arts" className="s-arts target-section">

      <div className="row s-arts__header">
        <div className="column large-12">
          <h1 className="font-500">AI ARTS PORTFOLIO</h1>
          <p className="font-500">
            Concepts, ideas, and visual experiments <br />
            generated with Artificial Intelligence
          </p>
        </div>
      </div>

      {/* 🔥 FILTROS */}
      <div className="arts-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
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