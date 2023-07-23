import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../shared/services/utils.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    //private utilsService: UtilsService
  ) {}

  linkFileBucket: string = "https://stardew-valley-mods.s3.sa-east-1.amazonaws.com/mods_stardew_valley.zip"

  ngOnInit(): void {

  }

  downloadMods() {
    const partesLink = this.linkFileBucket.split("/")
    const fileName = partesLink[partesLink.length - 1]
    //this.utilsService.downloadFile(this.linkFileBucket, fileName)
  }
}
