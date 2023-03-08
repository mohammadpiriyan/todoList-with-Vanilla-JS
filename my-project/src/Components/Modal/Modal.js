import El from "../../library/El";
import Button from "../Button/Button";

const Modal = () => {
  return El({
    element: "div",
    id:'modal',
    className:
      "flex flex-col bg-slate-100 w-[45rem] items-center rounded justify-center gap-4 divide-y divide-slate-700 absolute self-center top-32 self-center",
    child: [
      El({
        element: "div",
        className: "w-full flex justify-center items-center",
        child: [
          El({
            element: "h2",
            className: "",
            child: "New Task",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "w-full flex flex-col gap-16 justify-center items-center p-2",
        child: [
          El({
            element: "input",
            className: "w-full rounded p-3 border",
            placeholder: "Task Name",
          }),
          El({
            element: "div",
            className: "flex w-full justify-center items-center gap-2",
            child: [
              El({
                element: "select",
                className: "w-full rounded p-2 border",
                name: "",
                id: "",
                child: [
                  El({
                    element: "option",
                    value: "",
                    child: "Priority",
                  }),
                  El({
                    element: "option",
                    value: "",
                    child: "Low",
                  }),
                  El({
                    element: "option",
                    value: "",
                    child: "Medium",
                  }),
                  El({
                    element: "option",
                    value: "",
                    child: "Hight",
                  }),
                ],
              }),

              El({
                element: "select",
                className: "w-full rounded p-2 border",
                name: "",
                id: "",
                child: [
                  El({
                    element: "option",
                    value: "",
                    child: "Status",
                  }),
                  El({
                    element: "option",
                    value: "",
                    child: "Todo",
                  }),
                  El({
                    element: "option",
                    value: "",
                    child: "Doing",
                  }),
                  El({
                    element: "option",
                    value: "",
                    child: "Done",
                  }),
                ],
              }),

              El({
                element: "input",
                className: "w-full rounded p-2 border",
                type: "date",
              }),
            ],
          }),

          El({
            element: "textarea",
            rows: "4",
            cols: "50",
            name: "",
            className: "w-full rounded p-2 border",
            child: "Detail",
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex w-full justify-between p-2",
        child: [
          Button({
            element: "button",
            child: "cancel",
            variant: "outlined",
          }),
          Button({
            element: "button",
            child: "Save",
            variant: "contained",
          }),
        ],
      }),
    ],
  });
};

export default Modal;