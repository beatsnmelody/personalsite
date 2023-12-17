import { NavBar } from "../NavBar";
import beats from "../../assets/BeatsRef.png";
import melody from "../../assets/MelodyRef.png";

export default function BeatsAndMelody() {
  return (
    <>
    <NavBar/>
      <div className="base-100 m-auto w-auto min-h-screen place-content">
        <div>
        <p className="">Beats and Melody</p>
          <h1 className="">Premise of Beats and Melody:</h1>
          <h1 className="">
            Two siblings, Beats and Melody, find out they're orphaned after
            going through some of their adoptive parents' old things. This sets
            off an investigation, and eventually a journey, to find not only
            their biological parents, but also their five elder siblings.
          </h1>
          <h1 className="">Beats</h1>
          <h1 className="">
            Beats is the elder brother of Melody. He's 20 years old, and is
            currently going to university. His deadly sin is technically sloth,
            but he loves to eat a lot too. He is very chill and easygoing, so he
            doesn't get invested into much anything.
          </h1>
          <img src={beats} alt="Beats" className="" />
          <h1 className="">Melody</h1>
          <h1 className="">
            Melody is the younger sister of Beats. She's 18 years old, and she
            is currently in her last year of high school. She wants to major in
            journalism once she goes to university. Her deadly sin is envy, as
            she gets jealous easily. She's very mischevious and petty, and she
            loves to start drama and rumors.
          </h1>
          <img src={melody} alt="Melody" className="" />
        </div>
      </div>
    </>
  );
}
