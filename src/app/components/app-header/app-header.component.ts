import {Component, OnInit} from '@angular/core';

/* App services */
import {DateService} from '../../services/date.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  todayDay: string = '';
  todayDate: string = '';

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.todayDay = this.dateService.getTodayDay();
    this.todayDate = this.dateService.getTodayDate();
  }
}
