import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";

interface Props {
  items: object;
  activeItem: number;
}

export const Media: React.FC<Props> = ({ items, activeItem }) => {
  return <MediaWrapper>{activeItem}</MediaWrapper>;
};

const MediaWrapper = styled("div", {
  width: "61.8%",
  flexGrow: "0",
  flexShrink: "0",
  backgroundColor: "lightPink",
});