import El from "../../library/El";
import Button from "../Button/Button";
import Input from "../input/input";

const Navbar = () => {
  return El({
    element: "nav",
    className:
      "w-full p-2 bg-purple-me lg:px-12 flex gap-40 justify-center shadow fixed z-10 justify-between items-center",
    child: [
      El({
        element: "div",
        className: "flex gap-4",
        child: [
          El({
            element: "button",
            className: "text-white-me",
            child: [
              El({
                element: "img",
                className: "w-8",
                src: "./src/icon/list.png",
              }),
            ],
          }),
          El({
            element: "P",
            className: "text-white-me font-semibold text-xl",
            child: "My TO-Do Tasks",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-4",
        child: [
          Input({
            element: "input",
            variant: "search",
          }),
          El({
            element: "button",
            className: "text-white-me",
            child: [
              El({
                element: "img",
                className: "w-8",
                src: "./src/icon/filter.png",
              }),
            ],
          }),
          El({
            element: "button",
            className: "text-white-me",
            child: [
              El({
                element: "img",
                className: "w-8",
                src: "./src/icon/add.png",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default Navbar;
