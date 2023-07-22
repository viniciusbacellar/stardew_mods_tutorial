import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class UtilsService {

  constructor(private http: HttpClient) { }

  downloadFile(link: string, fileName: string): void {
    this.http.get(link, { responseType: 'blob' }).subscribe(response => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
  }
}
