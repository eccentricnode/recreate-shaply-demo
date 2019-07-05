import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  facebook_Icon() {
    this.matIconRegistry.addSvgIcon(
      'facebook_f',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./social-link-assets/icons8-facebook-f-50.svg')
    );
  }

  instagram_Icon() {
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./social-link-assets/icons-linkedin-50.svg')
    );
  }

  twitter_Icon() {
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./social-link-assets/icons-twitter-50.svg')
    );
  }

  youtube_Icon() {
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./social-link-assets/icons-youtube-50.svg')
    );
  }
}
