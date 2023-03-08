import El from "../../library/El";
import Button from "../Button/Button";

const Modal = () => {
  return El({
    element: "div",
    id: "modal",
    className:
      "w-screen h-screen backdrop-blur-sm absolute flex justify-center items-center hidden",
    child: [
      El({
        element: "div",
        className:
          "flex flex-col bg-white w-[45rem] items-center rounded justify-center gap-4 divide-y divide-slate-700",
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
                id: "taskNameInput",
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
                        id: "PriorityInput",
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
                    id: "StatusInput",
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
                    id: "DateInput",
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
                id: "DetailInput",
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
                onclick: () => {
                  const modal = document.getElementById("modal");
                  modal.classList.toggle("hidden");
                },
              }),
              Button({
                element: "button",
                child: "Save",
                variant: "contained",
                onclick: () => {
                  taskNameInput = document.getElementById("taskNameInput");
                  
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default Modal;
