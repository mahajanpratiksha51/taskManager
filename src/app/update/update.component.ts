import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public dataid: number;
  public task: Task;
  constructor(private acivatedroute: ActivatedRoute, private router: Router, private api: TaskService) { }

  ngOnInit() {
    this.acivatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id")
      //console.log(this.dataid)
    })
    this.api.fetchData(this.dataid).subscribe((data: Task) => {
      this.task = data;
    })
  }
  update() {
    this.api.updateTask(this.task, this.dataid).subscribe((res: Task) => {
      this.router.navigate(["/"])
    })
  }
}
