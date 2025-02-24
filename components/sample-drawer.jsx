import { Button, Flex } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import SampleSelect from "./sample-select";

export default function SampleDrawer() {
  return (
      <DrawerRoot size="md">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Flex gap="4" direction="column">
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            <SampleSelect />
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
  );
}
