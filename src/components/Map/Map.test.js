import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Map from "./Map.jsx";

jest.mock("@react-google-maps/api", () => ({
  GoogleMap: jest.fn(({ onClick }) => (
    <div data-testid="mocked-google-map" onClick={onClick} />
  )),
  LoadScript: jest.fn(({ children }) => <div>{children}</div>),
}));

describe("Map Component", () => {
  it("render map", () => {
    render(<Map />);
  });

  it("render mocked GoogleMap component", () => {
    const { getByTestId } = render(<Map />);
    expect(getByTestId("mocked-google-map")).toBeInTheDocument();
  });
});
