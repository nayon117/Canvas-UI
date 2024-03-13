import Card1 from "../../components/App/Cards/Card1";
import Card2 from "../../components/App/Cards/Card2";

const Card = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <Card1 />
      <Card2/>
    </div>
  );
};

export default Card;
