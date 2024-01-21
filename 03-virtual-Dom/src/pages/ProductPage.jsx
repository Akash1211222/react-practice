import { useState } from "react";
import Crad from "../components/Crad";

const productPage = () => {
  const [count, setCount] = useState(0);

  const pantUrl =
    "https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg";

  const shirtUrl =
    "https://contents.mediadecathlon.com/p2603382/7c4f5c6750d0d3a607079f326f199478/p2603382.jpg";

  const jacketUrl =
    "https://images-cdn.ubuy.co.in/6538937984374c56f60a8e2e-junge-denim-jacket-men-fleece-jacket.jpg";

  return (
    <>
      <Crad product="Shirt" price="300$" oldPrice="500$" url={shirtUrl} />
      <Crad product="Pant" price="800$" oldPrice="1000$" url={pantUrl} />
      <Crad product="Jackets" price="1200$" oldPrice="1500$" url={jacketUrl} />
    </>
  );
};

export default productPage;
