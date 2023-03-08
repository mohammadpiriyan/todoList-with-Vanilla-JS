import El from "../../library/El";

const RenderUi = (data) => {
  const tbody = document.getElementById("tbodyTable");
  tbody.innerHTML = "";
  data.map((item) => {
    const row = El({
      element: "tr",
      child: [
        El({
          element: "td",
          className: "border-r px-6 py-4 border-neutral-200",
          child: item.Task,
        }),
        El({
          element: "td",
          className: "border-r px-6 py-4 border-neutral-200",
          child: item.Priority,
        }),
        El({
          element: "td",
          className: "border-r px-6 py-4 border-neutral-200",
          child: item.Status,
        }),
        El({
          element: "td",
          className: "border-r px-6 py-4 border-neutral-200",
          child: item.Date,
        }),
        El({
          element: "td",
          className: "border-r px-6 py-4 border-neutral-200",
          child: "button",
        }),
      ],
    });
    tbody.append(row);
  });
};
export default RenderUi;
