package com.soubhagya.qrcode.controller;

import com.soubhagya.qrcode.service.QRCodeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class QRCodeController {

    private final QRCodeService qrCodeService;

    @GetMapping(
            value = "/qr",
            produces = MediaType.IMAGE_PNG_VALUE
    )
    public byte[] generateQRCode(
            @RequestParam String text
    ) throws Exception {

        return qrCodeService.generateQRCode(text);
    }
}