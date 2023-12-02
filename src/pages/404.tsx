import Home from "@/layout";

import img from "../assets/undraw_page_not_found_re_e9o6 1.svg";

import Image from "next/image";

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
import { useRouter } from "next/router";

interface ErrorPageProps {}

const ErrorPage = () => {
  const route = useRouter();

  return (
    <>
      <Home>
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="100%"
          h="100vh"
          gap={20}
        >
          <Box>
            <Image loading="lazy" alt="" src={img} />
          </Box>
          <Flex justify="center" align="center" gap={20}>
            <Button
              style={{ borderRadius: "4px" }}
              bg="#6200EE"
              w="100%"
              p="10px 24px"
              onClick={() => {
                route.push("/");
              }}
            >
              Go Home Page
            </Button>
            <Button
              onClick={() => {
                route.back();
              }}
              variant="outline"
            >
              Reload Page
            </Button>
          </Flex>
        </Flex>
      </Home>
    </>
  );
};

export default ErrorPage;
