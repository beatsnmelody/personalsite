import { NavBar } from "../NavBar";
import cadcide from "../../assets/CadcideRef.png";
import pareil from "../../assets/PareilRef.png";

export default function Shadowtown() {
  return (
    <>
      <NavBar />
      <div className="base-100 m-auto w-auto min-h-screen place-content">
        <div>
          <p className="">Shadowtown</p>
          <h1 className="">Premise of Shadowtown:</h1>
          <h1 className="">
            Cadcide, an elite member of a militaristic cult, manages to slip
            away after their community is raided by authorities. Now a fugitive,
            he sets up a private investigation office in the shadiest part of
            the city, nicknamed Shadowtown. What allies will he meet during his
            time as a detective? Will he get caught? Find out now in Shadowtown!
          </h1>
          <h1 className="">Cadcide</h1>
          <h1 className="">
            Cadcide is an older man that has spent the vast majority of his life
            in the Phagal cult. After his cult got raided, he has to adjust to a
            different lifestyle as he becomes a detective. He's a leader type,
            being very orderly and rule-following. He takes business matters
            seriously, giving his all for his job.
          </h1>
          <img src={cadcide} alt="Cadcide" className="" />
          <h1 className="">Pareil</h1>
          <h1 className="">
            Pareil is Cadcide's assistant, and they met at a bar shortly after
            Cadcide entered Shadowtown. However, Pareil intends to arrest
            Cadcide when the oppurtunity arises. Even though Pareil is more
            mild-mannered, he takes his job very seriously as well.
          </h1>
          <img src={pareil} alt="Pareil" className="" />
        </div>
      </div>
    </>
  );
}
