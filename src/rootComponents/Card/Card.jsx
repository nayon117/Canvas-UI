import Card1 from "../../components/App/Cards/Card1";
import Card2 from "../../components/App/Cards/Card2";
import Card3 from "../../components/App/Cards/Card3";
import Card4 from "../../components/App/Cards/Card4";
import Card5 from "../../components/App/Cards/Card5";
import Card6 from "../../components/App/Cards/Card6";
import Card7 from "../../components/App/Cards/Card7";
import Card8 from "../../components/App/Cards/Card8";

const Card = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <Card1 />
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Card6/>
      <Card7/>
      <Card8/>
    </div>
  );
};

export default Card;
