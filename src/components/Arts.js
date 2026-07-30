import React, { useEffect, useState } from "react";
import "./styles/Arts.css";
import { images } from "../data/images";

const ITEMS_PER_PAGE = 6;

const Arts = () => {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [touchStartX, setTouchStartX] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  // 👉 reset page cuando cambia filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  // 🔥 PAGINACIÓN
  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);

  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 👉 MODAL
  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === paginatedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? paginatedImages.length - 1 : prev - 1
    );
  };

  // 👉 teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, paginatedImages]);

  // 👉 swipe mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const distance = touchStartX - touchEndX;

    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
  };

  return (
    <section id="arts" className="s-arts target-section">

      {/* HEADER */}
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
        {paginatedImages.map((img, index) => (
          <div key={img.id} className="column arts-item fade-in">
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

      {/* 🔥 PAGINACIÓN CYBERPUNK */}
      <div className="arts-pagination">
        {/* PREV */}
        <button
          className={`page-btn arrow ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          ❮
        </button>

        {/* NUMBERS */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        {/* NEXT */}
        <button
          className={`page-btn arrow ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
        >
          ❯
        </button>
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="arts-modal" onClick={closeModal}>
          <div
            className="arts-modal__content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={paginatedImages[activeIndex].src}
              alt=""
              className="arts-modal__image"
            />

            <div className="arts-modal__info">
              <h3>{paginatedImages[activeIndex].title}</h3>
              <p>{paginatedImages[activeIndex].category}</p>
            </div>

            <button className="modal-btn prev" onClick={prevImage}>
              ❮
            </button>
            <button className="modal-btn next" onClick={nextImage}>
              ❯
            </button>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Arts;