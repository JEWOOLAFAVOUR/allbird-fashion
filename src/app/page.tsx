"use client";

import { useState, useEffect } from "react";

export default function page() {
  const [products, setProducts] = useState([]);

  function fetchProduct() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>This is my Fashion Store</h1>
      <button
        onClick={fetchProduct}
        className="cursor-pointer p-2 bg-black text-white"
      >
        Fetch Products
      </button>
      <div>
        {products.map((data, index) => {
          return (
            <div key={index}>
              {/* <img src={data.image} alt="Test" className="h-20 w-20" />
              <p className="text-xl text-black">{data.title}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// import Navbar from "./navbar";

// export default function Home() {
//   const category = [
//     {
//       id: 1,
//       title: "New Arrivals",
//       bg: "#5e7282",
//     },
//     {
//       id: 2,
//       title: "Mens",
//       bg: "#554c49",
//     },
//     {
//       id: 3,
//       title: "Womens",
//       bg: "#8c6c67",
//     },
//     {
//       id: 4,
//       title: "Best Sellers",
//       bg: "#80887e",
//     },
//   ];
//   return (
//     <div>
//       <Navbar />

//       <div className="flex justify-between p-2">
//         {category.map((data, index) => {
//           return (
//             <div
//               key={index}
//               style={{backgroundColor: data.bg}}
//               className="h-[65vh] w-[24vw] border rounded-[20px]"
//             >
//               <h1>{data.title}</h1>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// // LystunHtsp

// // import Navbar from "./navbar";
// // import ProductCard from "./productcard";

// // export default function Home() {
// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="flex gap-3">
// //         <ProductCard
// //           name="Men's Canva"
// //           price={30}
// //           img="https://media.gettyimages.com/id/626963917/photo/his-and-hers-keep-fit-trainers.jpg?s=612x612&w=0&k=20&c=RJmhVttVU9A-Uxn3Vh4ro0JfBqMKKsqecgwBHvrCaw0="
// //         />
// //         <ProductCard
// //           name="Women's Canva"
// //           price={20}
// //           img="https://media.gettyimages.com/id/936087834/photo/red-stiletto-broken-heel.jpg?s=612x612&w=0&k=20&c=mANr_7rf5RPjzTJvGlabaEaYZGAQh-6Mr1XX7IFouX4="
// //         />
// //         <ProductCard
// //           name="Kids' Canva"
// //           price={40}
// //           img="https://media.gettyimages.com/id/2269372533/photo/close-up-details-an-unrecognisable-woman-tennis-players-leg-on-a-clay-court.jpg?s=612x612&w=0&k=20&c=reV3sf5_NVVT8gg-Cus1tLdh5LzHld1f3K1yiTbUANo="
// //         />
// //       </div>
// //     </div>
// //   );
// // }
