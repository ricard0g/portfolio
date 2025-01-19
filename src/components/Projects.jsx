import React from "react";
import { TileWrapper, TileBackground, TileContent } from "./Tile";

export default function Projects() {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground></TileBackground>
      <TileContent>Foo</TileContent>
      <TileContent>Foo</TileContent>
      <TileContent>Foo</TileContent>
    </TileWrapper>
  );
}
