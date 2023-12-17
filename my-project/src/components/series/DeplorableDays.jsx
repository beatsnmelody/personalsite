import { NavBar } from "../NavBar";
import bruno from "../../assets/BrunoRef.png";
import drip from "../../assets/DripRef.png";

export default function DeplorableDays() {
  return (
    <>
      <NavBar />
      <div className="base-100 m-auto w-auto min-h-screen place-content">
        <div>
          <p className="">Deplorable Days</p>
          <h1 className="">Premise of Deplorable Days:</h1>
          <h1 className="">
            Bruno, an anthropomorphic cat detective, recruits a camera-headed
            person named Drip to partner with in a detective business. Together,
            they explore and find cases to work on in the sprawling city of
            CaliWTF. What mishaps will these rascals get into?
          </h1>
          <h1 className="">Bruno</h1>
          <h1 className="">
            Bruno is an anthropomorphic cat that runs a detective agency. He has
            the power to create objects and people out of smoke, and he buys a
            lot of cigarettes...for his powers, or so he says. He's very smug
            and sassy, delivering smug quips with ease.
          </h1>
          <img src={bruno} alt="Bruno" className="" />
          <h1 className="">Drip</h1>
          <h1 className="">
            Drip is Bruno's partner, and he has the power to create forms out of
            a purple sludge he secretes.He's very easygoing and quite goofy, and
            he also has a considerate appetite. He's also very optimistic,
            delivering positive energy to the group.
          </h1>
          <img src={drip} alt="Drip" className="" />
        </div>
      </div>
    </>
  );
}
