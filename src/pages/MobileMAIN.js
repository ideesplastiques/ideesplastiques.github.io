import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileMAIN.module.css";
const MobileMAIN = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMobileDiscoverbuttonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.mobileMain} data-animate-on-scroll>
      <div className={styles.plastiques101Parent}>
        <div className={styles.plastiques101}>Plastiques 1.0.1</div>
        <div className={styles.virtualArtGalleryContainer}>
          <p className={styles.virtualArtGallery}>
            Virtual art gallery, container of art stuff.
          </p>
          <p className={styles.virtualArtGallery}>
            A single 3D little app. Now available.
          </p>
        </div>
        <div className={styles.mobileDiscoverbuttonParent}>
          <button
            className={styles.mobileDiscoverbutton}
            onClick={onMobileDiscoverbuttonClick}
          >
            <div className={styles.discover}>Discover</div>
          </button>
          <button className={styles.mobileDiscoverbutton1}>
            <div className={styles.whatsPoppin}>
              <span className={styles.whats}>{`What’s `}</span>
              <span className={styles.poppin}>Poppin’</span>
              <span className={styles.whats}>?</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMAIN;
