import React, { useEffect } from "react";
import Modals from "./Modals";
import "./styles/Channels.css";
const Channels = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])


  return (
    <section id="channels" className="s-channels target-section">
      <div className="row s-channels__header">
        <div className="column large-12">
          <h3 className="font-500">{/*A Few Of My Latest Creations*/}Channels</h3>
        </div>
      </div>
      {/*<Modals />*/}
    </section>
  );
};

export default Channels;
