"use client"

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
import * as React from 'react'
import SampleSelectPatternB from "./sample-select-patternb";

export default function SampleDrawerPatternB() {
  return (
      <DrawerRoot size="md">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
          Open Drawer (When it has few options)
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>When it has few options</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
                <Flex gap="4" direction="column">
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
                <SampleSelectPatternB />
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
