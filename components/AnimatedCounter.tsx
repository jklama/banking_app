"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: any }) => {
  return (
    <>
      <CountUp
        end={amount}
        decimal=","
        prefix="$"
        duration={2.75}
        decimals={2}
      />
    </>
  );
};

export default AnimatedCounter;
