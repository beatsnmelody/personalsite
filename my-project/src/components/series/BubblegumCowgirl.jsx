import { NavBar } from "../NavBar";
import shirley from "../../assets/ShirleyRef.png";
import rei from "../../assets/ReiRef.png";
import lola from "../../assets/LolaRef.png";

export default function BubblegumCowgirl() {
  return (
    <>
      <NavBar />
      <div className="base-100 m-auto w-auto min-h-screen place-content">
        <div>
          <p className="">Bubblegum Cowgirl</p>
          <h1 className="">Premise of Bubblegum Cowgirl:</h1>
          <h1 className="">
            A slime alien princess named Shirley has her home planet destroyed
            by an asteroid, and she is the only survivor. Still reeling over her
            loss, she goes on a spaceship and only finds her sense of purpose
            when an experienced space ranger takes her in.
          </h1>
          <h1 className="">Shirley</h1>
          <h1 className="">
            Shirley is an energetic and somewhat immature girl that had her home
            planet destroyed. She became a space ranger after Lola took her in,
            and she uses that occupation to cope with the loss of her planet and
            family.
          </h1>
          <img src={shirley} alt="Shirley" className="" />
          <h1 className="">Rei</h1>
          <h1 className="">
            Rei is a shy cyclops alien that got taken in due to her cleaning
            skills, as Shirley can be quite the slob. She's meek and
            mild-mannered, and she's not very experienced with combat. However,
            she's ready to help Shirley and Lola if they need anything.
          </h1>
          <img src={rei} alt="Rei" className="" />
          <h1 className="">Lola</h1>
          <h1 className="">
            Lola is the eldest of the trio, and she's also Shirley's mentor.
            She's very stern and serious, and she takes the lead when the group
            needs it most. She is also quite the workaholic, living off of
            coffee and staying up late doing missions.
          </h1>
          <img src={lola} alt="Lola" className="" />
        </div>
      </div>
    </>
  );
}
