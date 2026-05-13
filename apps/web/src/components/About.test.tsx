import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
    it("renders section title", () => {
        render(<About />);
        expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("renders infrastructure heading", () => {
        render(<About />);
        expect(
            screen.getByText(/Infrastructure & Cloud/i)
        ).toBeInTheDocument();
    });
});
