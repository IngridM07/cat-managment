import { Component, OnInit } from '@angular/core';

import { CatService} from '../cat.service';
import { Cat } from '../cat';
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  allCats: Cat[] = [];
  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.catService.getAll().subscribe((data: Cat[])=>{
      this.allCats=data;
      let houseparts: Array<string>;
      houseparts = ["Yard", "Kitchen", "Bedroom", "Livingroom", "Roof"];
      let i=0;
      this.allCats.forEach(element => {
        data[i]["location"]=houseparts[Math.floor(Math.random()*houseparts.length)];
        i++;
      });
    })
  }

  deleteCat(id:any){
    this.catService.delete(id).subscribe(res=> {
      this.allCats=this.allCats.filter(item=> item.id !== id)
      console.log("deleted")
    })
  }

}
