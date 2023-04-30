import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileDOWNLOAD.module.css";
const MobileDOWNLOAD = () => {
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

  const onChampagneSunsetIsClick = useCallback(() => {
    navigate("/mobile-main");
  }, [navigate]);

  const onDownloadbuttonClick = useCallback(() => {
    window.open("https://grayz.app/");
  }, []);

  return (
    <div className={styles.mobileDownload} data-animate-on-scroll>
      <div className={styles.champagneSunsetIsAvailableParent}>
        <h1
          className={styles.champagneSunsetIsContainer}
          onClick={onChampagneSunsetIsClick}
        >
          <p className={styles.champagneSunsetIs}>
            “Champagne Sunset” is available.
          </p>
          <p className={styles.champagneSunsetIs}>For free. Now.</p>
        </h1>
        <div className={styles.downloadbuttonParent}>
          <button
            className={styles.downloadbutton}
            onClick={onDownloadbuttonClick}
            data-animate-on-scroll
          >
            <img className={styles.appleIcon} alt="" src="/apple.svg" />
            <div className={styles.downloadPlastiques101}>
              Download Plastiques 1.0.1
            </div>
          </button>
          <div className={styles.macosParent}>
            <div className={styles.macos}>macOS</div>
            <img className={styles.frameChild} alt="" src="/ellipse-1.svg" />
            <div className={styles.macos}>Proudly Unverified</div>
            <img className={styles.frameChild} alt="" src="/ellipse-1.svg" />
            <div className={styles.macos}>236MB</div>
            <img className={styles.frameChild} alt="" src="/ellipse-1.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.lookingForAContainer}>
          <p className={styles.champagneSunsetIs}>
            Looking for a Windows version? Not our problem.
          </p>
          <p className={styles.champagneSunsetIs}>
            You can still send us money!
          </p>
        </div>
      </div>
      <div className={styles.lowerBanner}>
        <div className={styles.linksLine1Wrapper}>
          <div className={styles.linksLine1}>
            <div className={styles.ideesplastiques}>
              <div className={styles.idesPlastiques}>Idées Plastiques</div>
              <div className={styles.ideesplastiquesLinks}>
                <a className={styles.gettingStarted} target="_blank">
                  Getting Started
                </a>
                <a className={styles.nfts}>NFTs</a>
                <a className={styles.nfts}>Documentation</a>
                <a className={styles.nfts}>Credits</a>
              </div>
            </div>
            <div className={styles.ideesplastiques}>
              <div className={styles.idesPlastiques}>Get Involved</div>
              <div className={styles.ideesplastiquesLinks}>
                <a className={styles.nfts}>Want to showcase?</a>
                <a className={styles.nfts}>Arts plastiques</a>
                <a className={styles.nfts}>Conditions of Use</a>
                <a className={styles.nfts}>FAQ</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyrightChild} />
          <div className={styles.copyright2023}>
            Copyright © 2023 Idées Plastiques. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDOWNLOAD;
