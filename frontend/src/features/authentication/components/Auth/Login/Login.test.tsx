import { fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import Login from "./Login";
import { renderWithProviders } from "@/test/utils";

describe("Login", () => {
  it("should render login form", () => {
    renderWithProviders(<Login />);

    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  });
});

describe("Login validation", () => {
  beforeEach(() => {
    renderWithProviders(<Login />);
  });

  it("should show error for invalid email", async () => {
    const email = screen.getByPlaceholderText(/your-email/i);
    const button = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(email, {
      target: { value: "bad-email" },
    });

    fireEvent.click(button);

    expect(await screen.findByText(/incorrect email/i)).toBeInTheDocument();
  });

  it("should show error when password is too short", async () => {
    const password = screen.getByPlaceholderText(/at least/i);
    const button = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(password, {
      target: { value: "Ab1" },
    });

    fireEvent.click(button);

    expect(await screen.findByText(/Minimum 8 characters/i)).toBeInTheDocument();
  });

  it("should show error when password has no uppercase letter", async () => {
    const password = screen.getByPlaceholderText(/at least/i);
    const button = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(password, {
      target: { value: "bad-password" },
    });

    fireEvent.click(button);

    expect(await screen.findByText(/must contain a capital letter/i)).toBeInTheDocument();
  });

  it("should show error when password has no number", async () => {
    const password = screen.getByPlaceholderText(/at least/i);
    const button = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(password, {
      target: { value: "Password" },
    });

    fireEvent.click(button);

    expect(await screen.findByText(/must contain a number/i)).toBeInTheDocument();
  });

  it("should show error when password has no special characters", async () => {
    const password = screen.getByPlaceholderText(/at least/i);
    const button = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(password, {
      target: { value: "Password1" },
    });

    fireEvent.click(button);

    expect(await screen.findByText(/must contain a special character/i)).toBeInTheDocument();
  });
});
