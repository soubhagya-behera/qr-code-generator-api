package com.soubhagya.qrcode.controller;

import com.soubhagya.qrcode.service.QRScannerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class QRScannerController {

    private final QRScannerService qrScannerService;

    @PostMapping("/scan")
    public String scanQRCode(
            @RequestParam("file")
            MultipartFile file
    ) throws Exception {

        return qrScannerService
                .scanQRCode(file);
    }
}