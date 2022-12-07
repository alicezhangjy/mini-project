import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  alert: boolean = false;

  selectedFile: File = {} as File;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const filedata = new FormData();
    filedata.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/upload', filedata).pipe(catchError(err => {alert("This file could not be uploaded."); return throwError(err)})).subscribe(
      res => {
        this.alert = true;
        console.log(res)
      });
  }

  closeAlert() {
    this.alert = false;
  }
}
