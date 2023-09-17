import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  formValue !: FormGroup;
  data: Task[];
  taskObj: Task = new Task();
  namesearch: string = '';

  //store all records
  totalRecords: any;
  //page initialize to 1
  page: number = 1;
  constructor(private formbuild: FormBuilder, private api: TaskService) { }

  ngOnInit() {
    this.formValue = this.formbuild.group({
      taskName: ['', Validators.required],
      dueDate: [''],
      states: ['']
    })
    this.getTask();
  }


  //add task
  addTask(data: Task) {
    this.api.addTask(data).subscribe((res => {
      this.formValue.reset()
      this.getTask()
    }))

  }


  //get task
  getTask() {
    this.api.getTask().subscribe(res => {
      this.data = res;
    })
  }
  deleteTask(id: any) {
    this.api.deleteTask(id).subscribe(res => {
      this.getTask();
    })
  }
}

