import Home from "@/layout";
import React, { useEffect, useState } from "react";
import {
  Flex,
  Title,
  Box,
  InputBase,
  Button,
  Text,
  Input,
  CloseButton,
} from "@mantine/core";

import img from "../assets/logo (1).svg";

import Image from "next/image";
import Create from "@/components/modal-create-booking";
import { getSessionBooks } from "@/services/store";
import Edit from "@/components/modal-edit-boking";

const Books = () => {
  const [value, setValue] = useState("");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    try {
      const data = getSessionBooks();
      console.log(data);
      setBooks(data);
    } catch (error: any) {}
  }, []);
  const filtereSearchTitle = (searchValue: string) =>
    books?.filter((product) =>
      // @ts-expect-error
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <>
      <Home>
        <Flex
          h={200}
          p="20px 100px"
          mt={100}
          justify="space-between"
          w="100%"
          align="center"
        >
          <Flex justify="center" align="center" gap={20}>
            <Image alt="" src={img} loading="lazy" width={200} height={100} />
            <Input
              placeholder="Search for any training you want"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              mt="md"
              w="380px"
              h="48px"
              rightSection={
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => setValue("")}
                  style={{ display: value ? undefined : "none" }}
                />
              }
            />
          </Flex>
          <Image
            alt=""
            style={{ borderRadius: "50%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
            loading="lazy"
            width={50}
            height={50}
          />
        </Flex>
        <Flex
          p="0px 100px"
          direction="column"
          justify="center"
          align="center"
          h="100vh"
          w="100%"
        >
          <Flex justify="space-between" align="center" w="100%">
            <Flex justify="center" gap={20} direction="column">
              <Title
                style={{
                  color: "#FEFEFE",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                You’ve got{" "}
                <Title style={{ color: "#6200EE" }}>{books.length} books</Title>
              </Title>
              <Title
                style={{
                  color: "#FEFEFE",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                Your task today
              </Title>
            </Flex>
            <Create />
          </Flex>
          <Flex
            w="100%"
            align="center"
            h="100%"
            gap={20}
            mt={20}
            style={{
              flexWrap: "wrap",
              overflowY: "scroll",
              marginBottom: "10rem",
              paddingBlock: "20px",
            }}
          >
            {books &&
              books?.length > 0 &&
              filtereSearchTitle(value)?.map((item, idx) => (
                <Box
                  // @ts-expect-error
                  key={item.id}
                  style={{
                    height: "230px",
                    width: "30%",
                    position: "relative",
                    borderRadius: "4px",
                    boxShadow: "0px 4px 24px 0px rgba(51, 51, 51, 0.08)",
                  }}
                  p={32}
                  bg="#FEFEFE"
                  maw="30%"
                >
                  <Flex
                    mb={20}
                    justify="space-between"
                    gap={20}
                    align="center"
                    maw="100%"
                  >
                    <Title
                      w="200px"
                      h="auto"
                      style={{
                        color: "#151515",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                      }}
                      className="text"
                    >
                      {/* @ts-expect-error */}
                      {item.title}
                    </Title>
                    <Edit id={idx} />
                  </Flex>
                  <Text
                    style={{
                      color: "#333",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Nulla adipiscing
                    neque varius vestibulum magna in. Tortor quisque nisl congue
                    ut tellus sem id.
                  </Text>
                  <Flex mt={20} justify="space-between" align="center" w="100%">
                    <Text
                      style={{
                        color: "#333",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "150%",
                      }}
                    >
                      {/* @ts-expect-error */}
                      {item.author} {item.published}
                    </Text>
                    {/* @ts-expect-error */}
                    <Button>{item.pages}</Button>
                  </Flex>
                </Box>
              ))}
          </Flex>
        </Flex>
      </Home>
    </>
  );
};

export default Books;
