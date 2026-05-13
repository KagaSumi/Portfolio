import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
    it("renders name", () => {
        render(<Hero />);
        expect(screen.getByText("Quinten Leung")).toBeInTheDocument();
    });

    it("renders role text", () => {
        render(<Hero />);
        expect(
            screen.getByText(/Full-stack Developer/i)
        ).toBeInTheDocument();
    });
});
