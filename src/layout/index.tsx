import React from "react";
import { ReactNode } from "react";
import { Box, Flex } from "@mantine/core";

import img from "../assets/Home.png";

export default function Homee({ children }: { children: ReactNode }): any {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        h="100vh"
        w="100%"
        direction="column"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          overflow: "hidden",
          position: "fixed",
        }}
      >
        {children}
      </Flex>
    </>
  );
}
