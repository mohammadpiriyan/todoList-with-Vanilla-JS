import El from "../../library/El";

const Table = () => {
  return El({
    element: "div",
    className: "w-full flex justify-center items-center ",
    child: [
      El({
        element: "table",
        className: "min-w-full border text-center border-neutral-200",
        child: [
          El({
            element: "thead",
            className: "border-b font-medium border-neutral-200",
            child: [
              El({
                element: "th",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "Task Name",
              }),
              El({
                element: "th",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "Priority",
              }),
              El({
                element: "th",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "Status",
              }),
              El({
                element: "th",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "Daedline",
              }),
              El({
                element: "th",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "Actions",
              }),
            ],
          }),
          El({
            element: "tbody",
            className: "border-b border-neutral-200",
            child: [
              El({
                element: "td",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "walk",
              }),
              El({
                element: "td",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "low",
              }),
              El({
                element: "td",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "status",
              }),
              El({
                element: "td",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "1/1/1400",
              }),
              El({
                element: "td",
                className: "border-r px-6 py-4 border-neutral-200",
                child: "button",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default Table;
