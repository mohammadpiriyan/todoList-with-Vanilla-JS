let datalist = {};
const taskNameInput = document.getElementById("taskNameInput");
const PriorityInput = document.getElementById("PriorityInput");
const StatusInput = document.getElementById("StatusInput");
const DateInput = document.getElementById("DateInput");

const AddData = () => {
  const formData = {
    Task: taskNameInput.value,
    Priority: PriorityInput.value,
    Status: StatusInput.value,
    Date: DateInput.value,
    id: crypto.randomUUID(),
  };
  datalist.push(formData);
};
export default AddData;
