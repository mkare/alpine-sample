import Alpine from 'alpinejs';
import './index.css';

window.Alpine = Alpine;

Alpine.data('todoApp', () => ({
  newTask: '',
  tasks: [],
  filter: 'all',

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    }
  },

  deleteTask(index) {
    this.tasks.splice(index, 1);
  },

  toggleTaskCompletion(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
  },

  get filteredTasks() {
    if (this.filter === 'active') {
      return this.tasks.filter((task) => !task.completed);
    } else if (this.filter === 'completed') {
      return this.tasks.filter((task) => task.completed);
    }
    return this.tasks;
  },
}));

Alpine.start();
