import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  enterdSearchValue: string = '';
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() openByMoviid: EventEmitter<string> = new EventEmitter<string>();



  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enterdSearchValue);
  }
  onSearchTextClear() {
    this.searchTextChange.emit(this.enterdSearchValue);
    this.enterdSearchValue = ''
  }
}
