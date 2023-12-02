import { getSessionBooks, setSessionBooks } from "@/services/store";
import {
  Button,
  Flex,
  Group,
  Modal,
  Box,
  Title,
  InputBase,
  Input,
} from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

function Create() {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date[]>([]);

  const handleModalClose = () => {
    close();
  };

  const handleImageClick = () => {
    open();
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({
      title: event.target.title.value,
      author: event.target.author.value,
      cover: event.target.cover.value,
      published: event.target.published.value,
      pages: event.target.pages.value,
    });

    let oldBooks = getSessionBooks();

    oldBooks.push({
      title: event.target.title.value,
      author: event.target.author.value,
      cover: event.target.cover.value,
      published: event.target.published.value,
      pages: event.target.pages.value,
    });

    setSessionBooks(oldBooks);
    window.location.href = window.location.pathname;
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleModalClose}
        centered
        withCloseButton={false}
        padding="xl"
        style={{
          borderRadius: "12px",
          background: "#FEFEFE",
          boxShadow: "0px 4px 32px 0px rgba(51, 51, 51, 0.04)",
        }}
        w={430}
      >
        <Box w="100%">
          <Flex align="center" w="100%">
            <Title
              style={{
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                color: "#151515",
              }}
            >
              Create a book
            </Title>
          </Flex>
          <form onSubmit={handleSubmit}>
            <Flex
              justify="center"
              direction="column"
              gap={10}
              align="center"
              w="100%"
            >
              <InputBase
                w="100%"
                placeholder="Enter your title"
                label="Title"
                name="title"
              />
              <InputBase
                w="100%"
                placeholder="Enter your author"
                label="Author"
                name="author"
              />
              <InputBase
                w="100%"
                placeholder="Enter your cover"
                label="Cover"
                name="cover"
              />
              <Input
                mt={20}
                placeholder="Enter your published"
                w="100%"
                type="date"
                name="published"
              />
              <InputBase
                w="100%"
                placeholder="Enter your pages"
                label="Pages"
                name="pages"
              />
            </Flex>
            <Flex gap={20} mt={20} justify="center" align="center" w="100%">
              <Button
                style={{ borderRadius: "4px" }}
                variant="outline"
                onClick={close}
                w="100%"
              >
                Close
              </Button>
              <Button
                type="submit"
                style={{ borderRadius: "4px" }}
                w="100%"
                bg="#6200EE"
              >
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
      </Modal>

      <Group>
        <Button
          style={{ borderRadius: "4px" }}
          bg="#6200EE"
          p="10px 24px"
          onClick={handleImageClick}
        >
          + Create a book
        </Button>
      </Group>
    </>
  );
}

export default Create;
