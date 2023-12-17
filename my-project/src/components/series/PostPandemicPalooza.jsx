import { NavBar } from "../NavBar";
import hothead from "../../assets/HotheadRef.png";
import acrid from "../../assets/AcridRef.png";
import dynamo from "../../assets/DynamoRef.png";
import squirt from "../../assets/SquirtRef.png";

export default function PostPandemicPalooza() {
  return (
    <>
      <NavBar />
      <div className="base-100 m-auto w-auto min-h-screen place-content">
        <p className="">Post Pandemic Palooza</p>
        <h1 className="">Premise of Post Pandemic Palooza:</h1>
        <h1 className="">
          This universe consists of a main plot and a subplot! The main plot
          follows Hothead and Dynamo, who meet a stray robot named Acrid, and
          they decide to take him in. The territory they're in is split up and
          ruled by several different mafias, and one of the mafia heads is
          Hothead's nemesis, so Hothead seeks to kill him. So, they all figure
          out a plan to kill the nemesis, and they eventually pull it off, only
          to get chased down by their son in revenge for what they did. Thus,
          the trio runs around, meeting lots of people along the way. Meanwhile,
          the subplot follows a small robot named Squirt who is unknowingly the
          reincarnated successor of the dictator that purged the human species,
          as well as his journey to figure out who he truly is.
        </h1>
        <h1 className="">Acrid</h1>
        <h1 className="">
          Acrid is the youngest of the main trio, being 21 years old. He was
          taken in by Dynamo and Hothead, and the three have a similar dynamic
          to roommates. He's very speedy, often getting way in over his head in
          certain scenarios. He's also the mushy type, often being very
          affectionate, especially to anyone interested in him.
        </h1>
        <img src={acrid} alt="Acrid" className="" />
        <h1 className="">Dynamo</h1>
        <h1 className="">
          Dynamo is the second oldest in the group, being made shortly after the
          apocalypse. He was originally made as an animatronic to comfort kids,
          but people quickly realized he was defective and abandoned him.
          Despite his trauma, he's a bundle of energy, often being hard to
          manage. He also tends to be moody, having both manic and, rarely,
          depressive episodes.
        </h1>
        <img src={dynamo} alt="Dynamo" className="" />
        <h1 className="">Hothead</h1>
        <h1 className="">
          Hothead is the brains of the main three, being the eldest in his
          group. He's the only one to see Earth pre-apocalypse, and he wishes he
          could live in his childhood forever. He's very serious and hardheaded,
          also having quite a bit of a temper.
        </h1>
        <img src={hothead} alt="Hothead" className="" />
        <h1 className="">Squirt</h1>
        <h1 className="">
          Squirt is the reincarnated version of a notorious dictator known as
          Madam-Nukes-a-Lot. However, he doesn't know this at the moment,
          currently living in bliss and innocence. He's very perky, and he has a
          sassy side too. He also has an artistic streak, mostly drawing himself
          buff.
        </h1>
        <img src={squirt} alt="Squirt" className="" />
      </div>
    </>
  );
}
