import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import WaypointList from "./WaypointList";
import { saveAs } from "file-saver";

jest.mock("file-saver", () => ({ saveAs: jest.fn() }));

describe("WaypointList Component", () => {
  it("render WaypointList", () => {
    const { getByText } = render(<WaypointList />);
    const headingElement = getByText("Route Builder");
    expect(headingElement).toBeInTheDocument();
  });
});
