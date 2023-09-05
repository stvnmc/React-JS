export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td>
        <h2>{task.name}</h2>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
