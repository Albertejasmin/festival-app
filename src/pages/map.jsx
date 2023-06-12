import React from "react";
import FestivalMap from "@/components/festivalMap";

// Ikke nødvendigt at have et component til.

export default function FestivalPage({ scheduleData }) {
  return (
    <>
      <FestivalMap scheduleData={scheduleData} />
    </>
  );
}

export async function getServerSideProps() {
  const apiEndpoints = ["https://nova-enchanted-confidence.glitch.me/schedule"];

  // mapper igennem hver array alt efter hvilket endpoint det er og fetcher
  const apiRequest = apiEndpoints.map((endpoint) => fetch(endpoint));
  // Promise.all venter på alle apiRequest er kørt igennem før den går videre.
  const [scheduleRes] = await Promise.all(apiRequest);

  const scheduleData = await scheduleRes.json();

  return {
    props: {
      scheduleData,
    },
  };
}
