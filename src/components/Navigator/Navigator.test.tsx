import Navigator from "./Navigator";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Navigator component", () => {
  it("renders", () => {
    render(
      <Navigator
        activeCanvas="https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/assortedCanvases/canvas/0"
        currentTime={1000}
        defaultResource="https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/supplementing/new_airliner_en.vtt"
      />,
    );
    expect(screen.getByTestId("navigator-wrapper"));
  });
});