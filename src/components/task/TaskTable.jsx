import { useEffect, useState } from "react";

// Components
import TaskRow from "./taskrow";


const initialState = [
  { id: 1, name: "aprender programación", priority: 1, done: false },
  { id: 2, name: "practicas sentencias sql", priority: 2, done: false },
  { id: 3, name: "Reposar la espalda", priority: 1, done: true },
  { id: 4, name: "Realizar compras semanales", priority: 3, done: false },
];

const TaskTable = () => {
  const headers = ["#", "Task", "Priority", "Done"];
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      // console.log("Iniciando");
      setTasks(initialState);
  }, []);

  const toggleTask = (id) => {
    console.log(id);
    console.log("CLICK");

};

  const headerStyle= { textAlign: "center", verticalAlign: "middle"};  
  
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-8">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th style={ headerStyle} key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) =>(
                    <TaskRow task={task} index={index} key={task.id} toggleTask={toggleTask}/>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
