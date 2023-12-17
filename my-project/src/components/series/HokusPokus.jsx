import { NavBar } from "../NavBar";
import sim from "../../assets/SimRef.png";
import virtua from "../../assets/VirtuaRef.png";
import cherry from "../../assets/CherryRef.png";

export default function HokusPokus() {
  return (
    <>
      <NavBar />
      <div className="base-100 m-auto w-auto min-h-screen place-content">
        <div>
          <p className="">Hokus Pokus</p>
          <h1 className="">Premise of Hokus Pokus:</h1>
          <h1 className="">
            Virtua, after being exiled from the medical industry for practicing
            necromancy, seeks to redeem himself by reviving an ancient, powerful
            wizard. When he revives the wizard and brings him back, though, the
            medical community refuses to acknowledge him. Therefore, he's stuck
            with an ancient wizard he has to care for in the sprawling city of
            Dubai...what adventures will this duo go on?
          </h1>
          <h1 className="">Sim</h1>
          <h1 className="">
            Sim is an ancient wizard that is at least one millenium old. He's
            very arrogant and hardheaded, much to his chargin. When he was
            originally alive, he made a deal with the devil to gain mastery of
            the four elements, which are air, water, fire, and earth. He also
            wanted the ability to shapeshift fully into a human. He was revived
            by Virtua, becoming able to see today's world for the first time.
          </h1>
          <img src={sim} alt="Sim" className="" />
          <h1 className="">Virtua</h1>
          <h1 className="">
            Virtua was a doctor that was exiled from the medical community. He's
            one of the few that can deal with Sim's arrogance. He's cool and
            confident, and he's also very intelligent on a variety of topics.
            He's also very financially smart and frugal, being the one that
            provides for Sim.
          </h1>
          <img src={virtua} alt="Virtua" className="" />
          <h1 className="">Cherry</h1>
          <h1 className="">
            Cherry is a magician that was born in Las Vegas before moving to
            Dubai to spread his act around. He's a hopeless romantic, often
            flirting with Sim despite the wizard hating him for using "fake"
            magic. He's also a cyborg, given new life after he was originally
            murdered as a human.
          </h1>
          <img src={cherry} alt="Cherry" className="" />
        </div>
      </div>
    </>
  );
}
