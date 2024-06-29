import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h2 className="font-bold  text-4xl text-[#213360]">Biography</h2>
          <h3 className="font-bold  text-[#213360]" >Who We Are</h3>
          <p className="font-bold  text-[#213360]" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
            consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
            magnam voluptatum consectetur reprehenderit fugiat recusandae aut
            similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
            nesciunt laboriosam totam iusto!
          </p>
          <p className="font-bold  text-[#213360]" >We are all in 2024!</p>
          <p className="font-bold  text-[#213360]" >We are working on a MERN STACK PROJECT.</p>
          <p className="font-bold  text-[#213360]" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            assumenda exercitationem accusamus sit repellendus quo optio dolorum
            corporis corrupti. Quas similique vel minima veniam tenetur
            obcaecati atque magni suscipit laboriosam! Veniam vitae minus nihil
            cupiditate natus provident. Ex illum quasi pariatur odit nisi
            voluptas illo qui ipsum mollitia. Libero, assumenda?
          </p>
          <p className="font-bold  text-[#213360]" >Lorem ipsum dolor sit amet!</p>
          <p className="font-bold  text-[#213360]" >Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
