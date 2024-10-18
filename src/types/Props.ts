interface Props {
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
  tasks: string[];
}

export default Props;