import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from "./Counter";

describe("Counter", () => {
  describe("when clicked", () => {
    it("increments count value by one", async () => {
      render(<Counter />);

      const button = screen.getByRole("button");
      const initialCount = screen.getByText("0");

      expect(initialCount).toBeInTheDocument();

      await userEvent.click(button);

      const subsequentCount = screen.getByText("1");

      expect(subsequentCount).toBeInTheDocument();
    });
  });
});
