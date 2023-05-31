// import { ActiveLink } from "./ActiveLink";
// import { render } from "@testing-library/react";

// jest.mock("next/router", () => ({
//   useRouter() {
//     return {
//       pathname: "/projects",
//     };
//   },
// }));

// describe("ActiveLink", () => {
//   describe("when link href does not match current browser url", () => {
//     it("does not have active class", () => {
//       const { container } = render(<ActiveLink href="/">Home</ActiveLink>);

//       expect(container.firstChild).not.toHaveClass("active");
//     });
//   });

//   describe("when link href matches current browser url", () => {
//     it("has active class", () => {
//       const { container } = render(
//         <ActiveLink href="/projects">Projects</ActiveLink>,
//       );

//       expect(container.firstChild).toHaveClass("active");
//     });
//   });
// });
