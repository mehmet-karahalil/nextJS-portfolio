import CardPanel from "@/components/project-companents/openning-card";
import styles from "./style.module.css";


export default function Opening_Card() {
  return (
    <div id="openingCard" className={styles.card_container}>
      <CardPanel title="DRAGON AGE" imageUrl="https://image.api.playstation.com/cdn/EP0006/CUSA00503_00/po3npmo5gCV0h0QaRs3vHbJjZSzuJQ28.png" />
      <CardPanel title="WİTCHER" imageUrl="https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f" />
      <CardPanel title="MASS EFFECT" imageUrl="https://i.ytimg.com/vi/W2jGJt-CFdM/maxresdefault.jpg" />
      <CardPanel title="ELDEN RİNG" imageUrl="https://i.ytimg.com/vi/OT8if6DXOFQ/maxresdefault.jpg" />
      <CardPanel title="SKYRİM" imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202009/2820/h12URI7MdswtFPFHpkppNh2z.png" />
    </div>
  );
}
