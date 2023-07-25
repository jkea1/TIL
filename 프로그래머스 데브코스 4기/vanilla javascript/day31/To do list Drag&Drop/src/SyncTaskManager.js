import { request } from "./api.js";

export default function SyncTaskManager() {
  const tasks = [];

  this.addTask = (task) => {
    tasks.push(task);
  };

  this.removeTasks = (urlPattern) => {
    tasks = tasks.filter((task) => !task.url.includes(urlPattern)); // 포함되지 않는 것만 남는다.
    console.log(tasks);
  };

  this.run = async () => {
    if (tasks.length > 0) {
      const task = tasks.shift();

      await request(task.url, {
        method: task.method || "GET",
      });

      this.run();
    }
  };
}
