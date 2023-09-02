import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted }) => {
  const TaskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {TaskTableRows(showCompleted)}
      </tbody>
    </table>
  );
};
