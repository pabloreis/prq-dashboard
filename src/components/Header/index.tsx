import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      h="20"
      mx="auto"
      mt="4"
      p="6"
      maxWidth={1480}
      w="100"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
