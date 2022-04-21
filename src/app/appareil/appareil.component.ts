import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = "";
  @Input() appareilStatus: string="";
  @Input() indexOfAppareil: number=0;
  @Input() id: number= 0;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }
	
  getStatus(){
	  return this.appareilStatus;
  }
  getColor(): string{
	  if(this.appareilStatus === 'Allumer'){
			return 'green';
	  }else if(this.appareilStatus='Eteint'){
		  return 'red';
	  }else{
		  return 'undefined'
	  }
  }
  onSwitchOn(){
	  this.appareilService.switchOnOne(this.indexOfAppareil)
  }
  onSwitchOff(){
	  this.appareilService.switchOnOff(this.indexOfAppareil)
  }

}
