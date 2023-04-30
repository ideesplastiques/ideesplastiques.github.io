import { useCallback } from "react";
import styles from "./PlastiquesContainer.module.css";
const PlastiquesContainer = () => {
  const onDesktopWhatspoppinbuttonClick = useCallback(() => {
    window.location.href =
      "mailto:dellaiutogabriel@gmail.com?subject=Hello There!";
  }, []);

  return (
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
      <div className={styles.desktopDiscoverbuttonParent}>
        <button className={styles.desktopDiscoverbutton}>
          <div className={styles.discover}>Discover</div>
        </button>
        <button
          className={styles.desktopWhatspoppinbutton}
          onClick={onDesktopWhatspoppinbuttonClick}
        >
          <div className={styles.whatsPoppin}>
            <span className={styles.whats}>What’s</span>
            <span className={styles.poppin}> Poppin’?</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PlastiquesContainer;
