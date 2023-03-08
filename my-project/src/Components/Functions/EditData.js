import RenderUi from "./RenderUi";

const EditData = (e) => {
  const taskNameInput = document.getElementById("taskNameInput");
  const PriorityInput = document.getElementById("PriorityInput");
  const StatusInput = document.getElementById("StatusInput");
  const DateInput = document.getElementById("DateInput");
  let datalist = JSON.parse(localStorage.getItem("datalist")) || [];
  const id = e.target.parentElement.id;
  let addform = datalist.find((itemdata) => {
    return itemdata.id == id;
  });
  console.log(addform.Priority);
  taskNameInput.value = addform.Task;
  PriorityInput.value = addform.Priority;
  StatusInput.value = addform.Status;
  DateInput.value = addform.Date;
};

export default EditData;
