import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-library',
  templateUrl: './photo-library.component.html',
  styleUrls: ['./photo-library.component.scss']
})
export class PhotoLibraryComponent implements OnInit {
  arrayOfPhotos = [];
  sanitization: any;
  name: string;
  filesArray = [];

  constructor(private sanitizer: DomSanitizer) { }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this.showArray();
  }

  showArray(): void {
    this.arrayOfPhotos = [];
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      this.arrayOfPhotos.push({ name: key, url: localStorage.getItem(key) })
    }

  }

  uploadFile(event): void {
    this.filesArray = event.target.files;
    for (const file of this.filesArray) {
      const url = URL.createObjectURL(file);
      this.name = file.name;
      let keys = Object.keys(localStorage);
      for (let key of keys) {
        if (key === file.name) {
          this.name = 'new_' + file.name;
        }
      }
      localStorage.setItem(this.name, url);
    }
    this.ngOnInit();
  }

  deletePhoto(index: number, photo: any, event: any) {
    let elem = event.currentTarget;
    let nextSibling = elem.nextElementSibling;
    let targ = nextSibling.nextElementSibling;
    setTimeout(() => {
      targ.style.textDecoration = 'line-through';
    }, 50, setTimeout(() => {
      targ.style.textDecoration = 'none';
      localStorage.removeItem(photo.name)
      this.arrayOfPhotos.splice(index, 1);
    }, 400));
  }
}

