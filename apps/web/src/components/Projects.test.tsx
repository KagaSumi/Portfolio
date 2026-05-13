import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
    it("renders section title", () => {
        render(<Projects />);
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
            "Projects"
        );
    });

    it("renders project cards", () => {
        render(<Projects />);

        expect(screen.getByText("Project Name")).toBeInTheDocument();
        expect(
            screen.getByText("Relics and Receipts")
        ).toBeInTheDocument();
    });
});
