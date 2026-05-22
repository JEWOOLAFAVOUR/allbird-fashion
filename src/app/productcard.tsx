type ProductCard = {
  name: string;
  price: number;
  img: string;
};

export default function ProductCard({ name, price, img }: ProductCard) {
  return (
    <div className="h-[65vh] w-[50vh] border rounded-2xl mt-5 relative">
      <img
        src={img}
        alt={name}
        className="h-full w-full object-cover  rounded-2xl"
      />
      <div className="absolute top-5">
        <p className="">{name}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
}
