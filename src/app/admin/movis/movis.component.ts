import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/core/services.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-movis',
  templateUrl: './movis.component.html',
  styleUrls: ['./movis.component.css']
})
export class MovisComponent implements OnInit {
  ticketId :any;
  ticketDetails: any;
  payload: number | undefined;
  imgbaseurl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ServicesService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.ticketId = this.activatedRoute.snapshot?.params?.['id'];
    this.getTicketDetails()
  }
  async getTicketDetails(){
    await (this.service.getById(this.ticketId)).subscribe((response:any)=>{
          this.ticketDetails = response;
    })
  }

  back(): void {
    this.location.back()
  }
}
