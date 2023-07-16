// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import Cell from "./Cell";

// describe("Cell", () => {
//   it("submits form with correct value", () => {
//     const mockFn = jest.fn(); // Mock function to simulate callback

//     const { getByText, getByLabelText } = render(
//       <Cell row={0} index={0}  fn={mockFn} />
//     );

//     const input = screen.getByLabelText("Input Field"); // Provide a label for the input field
//     const submitButton = screen.getByText("Submit");

//     fireEvent.change(input, { target: { value: "Test Value" } });
//     fireEvent.click(submitButton);

//     expect(mockFn).toHaveBeenCalledTimes(1); // Check if the callback function was called once
//     expect(mockFn).toHaveBeenCalledWith("Test Value"); // Check if the correct value was passed to the callback function
//   });
// });
