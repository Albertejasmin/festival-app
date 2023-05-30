import React, { useState } from "react";
import FestivalPage from "@/pages/map";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { ScheduleCardMID } from "./Mid_modal";
import { ScheduleCardJOTU } from "./Jotu_modal";
export default function FestivalMap({ scheduleData }) {
  const [hoveredImg, setHoveredImg] = useState(null);

  const [showMap, setShowMap] = useState(true);
  const [selectedTent, setSelectedTent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleTentClick(tent) {
    setSelectedTent({ ...scheduleData });

    setShowMap(false);
    setShowModal(true);
    console.log(tent, showModal, showMap);
    if (showModal) {
      changeModal(tent);
    }
  }

  function handleMouseOver(index) {
    setHoveredImg(index);
  }

  function handleMouseOut() {
    setHoveredImg(null);
  }

  function getImageStyle(index) {
    const scale = hoveredImg === index ? 1.2 : 1;
    return {
      position: "absolute",
      width: "100%",
      maxWidth: "180px",
      transform: `scale(${scale})`,
    };
  }
  function changeModal(tent) {
    if (tent === "Telt1") {
      console.log("dette er ", tent);

      !showMap && <ScheduleCardMID />;
    }
  }
  return (
    <>
      {" "}
      <ScheduleCardMID
        scheduleData={scheduleData}
        selectedTent={selectedTent}
        showModal={showModal}
        handleCloseModal={setShowModal}
      />
      {!showModal && (
        <div className={styles.mapDiv}>
          <div className={styles.nav}>
            <Navigation></Navigation>
            <Link href="/">
              <button className={styles.backToIndex}>Back </button>
            </Link>
          </div>
          <div className={styles.map_top}>
            <h1 className={styles.map_overskrift}>FOO FESTIVAL MAP </h1>
            <p className={styles.map_underOverskrift}>
              click on the tents to see schedule{" "}
            </p>
          </div>
          <img
            src="/map.svg"
            alt="Map"
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />

          <img
            className={styles.telt1}
            src="/telt1.svg"
            alt="Telt1"
            style={{
              ...getImageStyle(1),
            }}
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={handleMouseOut}
            onClick={() => handleTentClick("Telt1")}
          />

          <img
            className={styles.telt2}
            src="/telt2.svg"
            alt="Telt2"
            style={{
              ...getImageStyle(2),
            }}
            onMouseOver={() => handleMouseOver(2)}
            onMouseOut={handleMouseOut}
            onClick={() => handleTentClick("Telt2")}
          />

          <img
            className={styles.telt3}
            src="/telt3.svg"
            alt="Telt3"
            style={{
              ...getImageStyle(3),
            }}
            onMouseOver={() => handleMouseOver(3)}
            onMouseOut={handleMouseOut}
            onClick={() => handleTentClick("Telt3")}
          />
        </div>
      )}
      {/* {showModal ? (
        <ScheduleCardMID scheduleData={scheduleData} />
      ) : (
        <ScheduleCardJOTU scheduleData={scheduleData} />
      )} */}
      {/* {onTeltClick.selectedTent === "Telt1" ? (
        <ScheduleCardMID
          scheduleData={scheduleData}
          showModal={showModal}
          handleCloseModal={setShowModal}
        />
      ) : (
        <ScheduleCardJOTU
          scheduleData={scheduleData}
          handleCloseModal={setShowModal}
        />
      )} */}
    </>
  );
}

/*   :
  <ScheduleCardVAN scheduleData={scheduleData} handleCloseModal={setShowModal} /> */
