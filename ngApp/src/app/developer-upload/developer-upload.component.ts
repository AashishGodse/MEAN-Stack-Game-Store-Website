import { Component, OnInit } from "@angular/core";
import { Upload } from "./upload";
import { FileSelectDirective, FileUploader } from "ng2-file-upload";
import { FormUploadService } from "./../form-upload.service";
import { CompileShallowModuleMetadata } from "@angular/compiler";

@Component({
  selector: "app-developer-upload",
  templateUrl: "./developer-upload.component.html",
  styleUrls: ["./developer-upload.component.css"]
})
export class DeveloperUploadComponent implements OnInit {
  UploadData = {
    Email: localStorage.getItem("user_email")
  };
  email = localStorage.getItem("user_email");
  constructor(private _FUService: FormUploadService) {}

  Submitted = false;

  attachmentList: any = [];

  platHasError = true;

  OnUpload() {
    console.log(this.UploadData);

    this._FUService.Upload(this.UploadData).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    alert("Game Uploaded Successfully");
    location.reload();
  }

  ValidatePlatform(value) {
    if (value === "") {
      this.platHasError = true;
    } else {
      this.platHasError = false;
    }
  }

  ngOnInit() {}
}
