
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-qrcode-etudiant',
  templateUrl: './qrcode-etudiant.component.html',
  styleUrls: ['./qrcode-etudiant.component.scss']
})
export class QRcodeEtudiantComponent implements OnInit {
  qrCodeImage: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const data = localStorage.getItem('qrCodeData');
    if (data) {
      this.generateQRCode(data);
    }
  }

  generateQRCode(data: string): void {
    const typeNumber = 0;
    const errorCorrectionLevel = 'L';

    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(data);
    qr.make();

    const qrImage = qr.createImgTag();
    this.qrCodeImage = this.sanitizer.bypassSecurityTrustHtml(qrImage);
  }
  
}
