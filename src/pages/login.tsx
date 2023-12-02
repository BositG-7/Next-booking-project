import React, { useEffect, useState } from "react";
import { Flex, Title, Box, InputBase, Button, Text } from "@mantine/core";
import Link from "next/link";
import Home from "@/layout";
import { useRouter } from "next/router";
import { getSession, setSessionlogin } from "@/services/store";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });
  const route = useRouter();

  useEffect(() => {
    console.log(getSession());
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.username == getSession().key &&
      formData.password == getSession().secret
    ) {
      setSessionlogin(true);
      route.push("/books");
    }
  };

  return (
    <Home>
      <Flex
        justify="center"
        align="center"
        w={430}
        direction="column"
        p="48px 24px"
        bg="#FFFF"
        style={{ borderRadius: "10px" }}
        h={695}
        gap={30}
      >
        <Title style={{ color: "#151515" }}>Sign up</Title>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Flex
            w="100%"
            justify="center"
            align="center"
            gap={30}
            direction="column"
            mb={30}
          >
            <InputBase
              w="100%"
              placeholder="Enter your username"
              label="Your username"
              value={formData.username}
              onChange={(event) =>
                setFormData({ ...formData, username: event.target.value })
              }
            />
            <InputBase
              w="100%"
              placeholder="Enter your password"
              label="Your password"
              bg="white"
              style={{ background: "none" }}
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
          </Flex>
          <Button
            style={{ borderRadius: "4px" }}
            bg="#6200EE"
            w="100%"
            p="10px 24px"
            type="submit"
          >
            Button
          </Button>
        </form>
        <Text
          size="16px"
          color="rgba(17, 17, 17, 0.36)"
          style={{ alignSelf: "center" }}
        >
          Already signed up? <Link href="/register">Go to sign in.</Link>
        </Text>
      </Flex>
    </Home>
  );
};

export default Login;
