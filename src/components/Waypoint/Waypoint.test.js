import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Waypoint from "./Waypoint";

describe("Waypoint Component", () => {
  it("renders Waypoint component", () => {
    const title = "Waypoint 1";
    const { getByText } = render(<Waypoint title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it("calls onRemove when the trash icon is clicked", () => {
    const onRemoveMock = jest.fn();
    const { getByTestId } = render(
      <Waypoint title="Waypoint 1" onRemove={onRemoveMock} />
    );
    const trashIcon = getByTestId("trash-icon");

    fireEvent.click(trashIcon);

    expect(onRemoveMock).toHaveBeenCalledTimes(1);
  });
});
