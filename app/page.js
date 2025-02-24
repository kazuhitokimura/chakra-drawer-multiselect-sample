import { Flex } from "@chakra-ui/react";
import SampleDrawer from "../components/sample-drawer";
import SampleDrawerPatternB from "../components/sample-drawer-patternb";

export default function Home() {
  return (
    <Flex gap="4" direction="column">
      <SampleDrawer />
      <SampleDrawerPatternB />
    </Flex>
  );
}
