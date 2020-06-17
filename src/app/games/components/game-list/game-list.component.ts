import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Game[];
  p: number = 1;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getData().subscribe((value: Game[]) => {
      value.splice(0,1);
      this.games = value;
    });
  }
}
