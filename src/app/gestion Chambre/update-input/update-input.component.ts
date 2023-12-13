import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {ChambreService} from "../ChambreService/chambre-service.service";
import {Chambre, TypeChambre} from "../../models/Chambre";

@Component({
  selector: 'app-update-input',
  templateUrl: './update-input.component.html',
  styleUrls: ['./update-input.component.scss']
})
export class UpdateInputComponent {


  @Input()chambre =new Chambre(5 ,10 , TypeChambre.TRIPLE);
  @Output()notif=new EventEmitter();
  @Output()updateUser=new EventEmitter()
  errorData: any = {};
  modificationReussie: boolean = false;
  typeChambre: string[] = [];
  typeChambreData: string[] = ['SIMPLE', 'DOUBLE', 'TRIPLE'];

  @Output() hideUpdateChambreEvent = new EventEmitter<void>();
    isHidden: boolean = false;
    hideUpdateChambre() {
        this.isHidden = true;
        this.hideUpdateChambreEvent.emit();
    }

    constructor(private s:ChambreService){

  }
  ngOnInit(){

  }
  showForm(){
    this.notif.emit('bonjour')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  update(){
    this.s.updateChambre(this.chambre).subscribe(
      (res)=>{
        this.updateUser.emit(this.chambre)
        this.modificationReussie = true;
      },
      (error)=>{
        this.errorData = error;
      }
    )
  }
}
