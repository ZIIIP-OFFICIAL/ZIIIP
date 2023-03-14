import React from "react";
// import LaptopCard from './_laptopCard';

export default function Dashboard(props) {
  // console.log(laptops)
  console.log(props);
  return (
    <div>
      {/* {laptops.map((laptop, index) => (
				<LaptopCard laptop={laptop} key={index}></LaptopCard>
			))} */}
      Example
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch("http://localhost:3000/api/laptops");
  const data = await res.json();
  // console.log(data)
  // const data = "weeeeeeeeee"
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
