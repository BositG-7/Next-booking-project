import React, { useState } from "react";
import {
  Flex,
  Title,
  Box,
  InputBase,
  Button,
  Text,
  PasswordInput,
} from "@mantine/core";
import Link from "next/link";
import Home from "@/layout";
import { Api } from "@/modules/auth";
import { setSession } from "@/services/store";
import { useRouter } from "next/router";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    key: "",
    secret: "",
  });
  const route = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { data } = await Api.Register(formData);

      console.log(data.data);

      setSession(data.data);
      route.push("/login")
    } catch (error: any) {
      console.log(error);
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
            gap={15}
            direction="column"
            mb={30}
          >
            <InputBase
              w="100%"
              placeholder="Enter your name"
              label="Your name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              color="black"
            />
            <InputBase
              w="100%"
              placeholder="Enter your email"
              label="Your email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            <InputBase
              w="100%"
              placeholder="Enter your username"
              label="Your username"
              value={formData.key}
              onChange={(event) =>
                setFormData({ ...formData, key: event.target.value })
              }
            />
            <PasswordInput
              w="100%"
              placeholder="Enter your Password"
              label="Your password"
              value={formData.secret}
              onChange={(event) =>
                setFormData({ ...formData, secret: event.target.value })
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
          Already signed up? <Link href="/login">Go to sign up.</Link>
        </Text>
      </Flex>
    </Home>
  );
};

export default Register;
