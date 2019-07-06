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

  all_Icons() {
    this.facebook_Icon();
    this.linkedIn_Icon();
    this.twitter_Icon();
    this.youtube_Icon();
    this.instagram_Icon();
  }

  facebook_Icon() {
    this.matIconRegistry.addSvgIcon(
      'facebook_f',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./social-link-assets/facebook-f-brands.svg")
    );
  }

  twitter_Icon() {
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./social-link-assets/twitter-brands.svg")
    );
  }

  linkedIn_Icon(){
    this.matIconRegistry.addSvgIcon(
      'linkedIn',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./social-link-assets/linkedin-in-brands.svg")
    )
  }

  youtube_Icon() {
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./social-link-assets/youtube-brands.svg")
    );
  }

  instagram_Icon() {
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./social-link-assets/instagram-brands.svg")
    );
  }
}
