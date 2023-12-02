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
import { useEffect, useState } from "react";

function Edit({ id }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  // Define state variables for form values
  const [title, setTitle] = useState("Default Title");
  const [author, setAuthor] = useState("Default Author");
  const [cover, setCover] = useState("Default Cover");
  const [published, setPublished] = useState("");
  const [pages, setPages] = useState("0");

  useEffect(() => {
    console.log(id);

    let data = getSessionBooks();

    setTitle(data[id].title);
    setAuthor(data[id].author);
    setCover(data[id].cover);
    setPublished(data[id].published);
    setPages(data[id].pages);
  }, [id]);

  const handleModalClose = () => {
    close();
  };

  const handleImageClick = () => {
    open();
    console.log(id);
  };
  const handleDelteBooking = () => {
    let data = getSessionBooks();

    let newData = data.filter((item: any) => item.title !== data[id].title);

    console.log(newData);
    setSessionBooks(newData);
    window.location.href = window.location.pathname;
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log({
      title,
      author,
      cover,
      published,
      pages,
    });

    let oldBooks = getSessionBooks();
    let newData = oldBooks.filter(
      (item: any) => item.title !== oldBooks[id].title
    );

    newData.push({
      title,
      author,
      cover,
      published,
      pages,
    });

    setSessionBooks(newData);
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
              Edit a book
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
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
              <InputBase
                w="100%"
                placeholder="Enter your author"
                label="Author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.currentTarget.value)}
              />
              <InputBase
                w="100%"
                placeholder="Enter your cover"
                label="Cover"
                name="cover"
                value={cover}
                onChange={(e) => setCover(e.currentTarget.value)}
              />
              <Input
                mt={20}
                placeholder="Enter your published"
                w="100%"
                type="date"
                name="published"
                value={published}
                onChange={(e) => setPublished(e.currentTarget.value)}
              />
              <InputBase
                w="100%"
                placeholder="Enter your pages"
                label="Pages"
                name="pages"
                value={pages}
                onChange={(e) => setPages(e.currentTarget.value)}
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
                onClick={handleDelteBooking}
                style={{ borderRadius: "4px" }}
                w="100%"
                bg="red"
              >
                Delete booking
              </Button>
              <Button
                type="submit"
                style={{ borderRadius: "4px" }}
                w="100%"
                bg="#6200EE"
              >
                Edit
              </Button>
            </Flex>
          </form>
        </Box>
      </Modal>

      <Group>
        <Button
          style={{ borderRadius: "4px" }}
          bg="red"
          onClick={handleImageClick}
        >
          Edit a book
        </Button>
      </Group>
    </>
  );
}

export default Edit;
