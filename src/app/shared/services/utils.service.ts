import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UtilsService {

  constructor(private http: HttpClient) { }

  downloadFile(link: string) {
    return this.http.get(link, { responseType: 'blob' })
  }
}
