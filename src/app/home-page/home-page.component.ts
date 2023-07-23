import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../shared/services/utils.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private utilsService: UtilsService
  ) {}

  actualYear: number = new Date().getFullYear()
  linkFileBucketMods: string = "https://stardew-valley-mods.s3.sa-east-1.amazonaws.com/mods_stardew_valley.zip"
  linkFileBucketSmapi: string = "https://stardew-valley-mods.s3.sa-east-1.amazonaws.com/SMAPI-3.18.3-installer.zip"
  widthIcons: number = 47
  loading: boolean = false;

  ngOnInit(): void {

  }

  download(link: string) {
    const partesLink = link.split("/")
    const fileName = partesLink[partesLink.length - 1]
    this.loading = true;
    this.utilsService.downloadFile(link).subscribe(response => {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      this.loading = false;
    });
  }
}
