import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { FC, ReactNode } from "react";

const theme = createTheme({
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
});

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      {children}
      <Notifications position="top-right" />
    </MantineProvider>
  );
};

export default Providers;
