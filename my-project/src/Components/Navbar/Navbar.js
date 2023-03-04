import El from "../../library/El";
import Button from "../Button/Button";
import Input from "../input/input";

const Navbar = () => {
  return El({
    element: "nav",
    className:
      "w-full bg-purple-me lg:px-12 xsm:py-2 flex gap-40 xsm:flex-col justify-center shadow fixed z-10 justify-between",
    child: [
      El({
        element: "div",
        className:'flex gap-4',
        child: [
          El({
            element: "button",
            className: "text-white-me",
            child: "menu",
          }),
          El({
            element: "P",
            className: "text-white-me",
            child: "My TO-Do Tasks",
          }),
        ],
      }),
      El({
        element:'div',
        className:'flex gap-4',
        child:[
            Input({
                element: "input",
                variant: "search",
              }),
              El({
                element: "button",
                className: "text-white-me",
                child: "filter",
              }),
              El({
                element: "button",
                className: "text-white-me",
                child: "add",
              }),
        ]
      })
    ],
  });
};
export default Navbar;
