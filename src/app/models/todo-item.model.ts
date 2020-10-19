/* app services */
import {IdService} from "../services/id.service";


export class TodoItem {
  id: string;
  task: string;
  timeCreated: Date;
  timeCompleted: Date;

  constructor(task: string) {
    this.id = IdService.getRandomId();
    this.task = task;
    this.timeCreated = new Date();
    this.timeCompleted = null;
  }
}
