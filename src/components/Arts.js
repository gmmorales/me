import React, { useEffect, useState } from "react";
import "./styles/Arts.css";
import { images } from "../data/images";

const Arts = () => {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  // 👉 abrir modal
  const openModal = (index) => {
    setActiveIndex(index);
  };

  // 👉 cerrar modal
  const closeModal = () => {
    setActiveIndex(null);
  };

  // 👉 navegación
  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="arts" className="s-arts target-section">

      <div className="row s-arts__header">
        <div className="column large-12">
          <h1>AI ARTS PORTFOLIO</h1>
          <p>
            Concepts, ideas, and visual experiments <br />
            generated with Artificial Intelligence
          </p>
        </div>
      </div>

      {/* FILTROS */}
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
      <div className="row arts-grid" key={filter}>
        {filteredImages.map((img, index) => (
          <div key={img.id} className="column arts-item">
            <div
              className="arts-item__inner"
              onClick={() => openModal(index)}
            >
              <img src={img.src} alt={img.title} />

              <div className="arts-item__content">
                <h4>{img.title}</h4>
                <p>{img.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {activeIndex !== null && (
        <div className="arts-modal" onClick={closeModal}>
          <div className="arts-modal__content" onClick={(e) => e.stopPropagation()}>
            
            <img
              src={filteredImages[activeIndex].src}
              alt=""
              className="arts-modal__image"
            />

            <div className="arts-modal__info">
              <h3>{filteredImages[activeIndex].title}</h3>
              <p>{filteredImages[activeIndex].category}</p>
            </div>

            {/* CONTROLES */}
            <button className="modal-btn prev" onClick={prevImage}>‹</button>
            <button className="modal-btn next" onClick={nextImage}>›</button>
            <button className="modal-close" onClick={closeModal}>✕</button>

          </div>
        </div>
      )}

    </section>
  );
};

export default Arts;