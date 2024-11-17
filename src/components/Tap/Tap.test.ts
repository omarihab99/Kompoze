import { screen, render, fireEvent } from "@testing-library/react";
import Tap from "./Tap";
import { describe, it, vi, expect } from 'vitest';
describe('Tap component', () => {
    it('render tap button with the provided text', () => {
        render(
            Tap({
                text: 'Click Me',
                isActive: true,
                actionFn: vi.fn(),
            })
        );
        expect(screen.getByRole("button", { name: 'Click Me' })).toBeInTheDocument();
    })
    it('applies the correct tap background in when isActive is true', () => {
        render(
            Tap({
                text: 'Click Me',
                isActive: true,
                actionFn: vi.fn(),
            })
        );
        expect(screen.getByRole("button", { name: 'Click Me' })).toHaveClass("bg-black");
    })
    it("applies the correct tap background in when isActive is false", () => {
        render(
            Tap({
                text: 'Click Me',
                isActive: false,
                actionFn: vi.fn(),
            })
        );
        expect(screen.getByRole("button", { name: 'Click Me' })).toHaveClass("bg-white");
    })
    it("calles the actionFn when tap button is clicked", () => {
        const fn = vi.fn();
        render(
            Tap<string, void>({
                text: 'Click Me',
                isActive: true,
                actionFn: () => {
                    fn('Click Me')
                },
            })
        );
        const button = screen.getByRole("button", { name: "Click Me" });
        fireEvent.click(button);
        expect(fn).toHaveBeenCalledOnce();
    });
    it("handles numberic text", () => {
        render(
            Tap({
                text: 1,
                isActive: true,
                actionFn: vi.fn(),
            })
        )
        expect(screen.getByRole("button", { name: '1' })).toBeInTheDocument();
    })
    it("handles object text", () => {
        render(
            Tap({
                text: { toString: () => '2' },
                isActive: true,
                actionFn: vi.fn(),
            })
        )
        expect(screen.getByRole("button", { name: '2' })).toBeInTheDocument();
    })
});
