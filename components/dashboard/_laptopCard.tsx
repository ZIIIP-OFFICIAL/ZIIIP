import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "@/styles/Laptop.module.css";

interface Laptop {
  brand: string;
  ram: string;
  gpu: string;
  disk: string;
  processor: string;
  display: string;
  os: string;
  image: string;
  model: string;
  price: number;
  strikePrice: number;
  name: string;
}

interface Props {
  laptop: Laptop;
  setLaptopModel: Function;
  setOpen: Function;
}
const LaptopCard: React.FC<Props> = ({ laptop, setLaptopModel, setOpen }) => {
  function handleOpen() {
    setLaptopModel(laptop.model);
    setOpen(true);
  }
  return (
    <div className={styles.laptopCard}>
      <Image
        className={styles.laptopCardImg}
        src={laptop.image}
        alt={laptop.model}
        width={200}
        height={200}
      />
      <div className={styles.laptopInfo}>
        <p
          style={{
            gridColumn: "span 2",
            fontWeight: 800,
            textTransform: "capitalize",
          }}>
          {laptop.name}
        </p>
        <p>
          <b> Brand</b> <br /> {laptop.brand}
        </p>
        <p>
          <b>RAM</b>
          <br /> {laptop.ram}
        </p>
        <p>
          <b>Disk</b>
          <br /> {laptop.disk}
        </p>
        <p>
          <b>Processor</b>
          <br /> {laptop.processor}
        </p>
        <p>
          <b>GPU</b>
          <br /> {laptop.gpu}
        </p>
        <p>
          <b>Display</b>
          <br /> {laptop.display}
        </p>
        <p>
          <b>OS</b>
          <br /> {laptop.os}
        </p>
        <p>
          <b>Model</b>
          <br /> {laptop.model}
        </p>
        <p>
          <b>Price</b> <br /> <span style={{color:"	#A9A9A9", textDecoration:"red"}}><s>Rs {laptop.strikePrice}</s> </span> Rs {laptop.price}
        </p>
      </div>
      <button
        className={styles.infoButton}
        onClick={handleOpen}>
        Place an Order
      </button>
    </div>
  );
};

export default LaptopCard;
