import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/**

document.querySelector('body').addEventListener('mouseover', moveEyes);
function moveEyes(){
  let eye = document.querySelectorAll('.eye');
  eye.forEach(function(eye){
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(y,x);
    let rot = (radian * (180 / Math.PI)* -1) + 270;
    eye.style.transform = "rotate("+ rot +" deg)";
    })
}
**/

