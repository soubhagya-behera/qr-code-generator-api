package com.soubhagya.qrcode.service;

import com.google.zxing.BinaryBitmap;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;

@Service
public class QRScannerService {

    public String scanQRCode(
            MultipartFile file
    ) throws Exception {

        BufferedImage image =
                ImageIO.read(
                        file.getInputStream()
                );

        BinaryBitmap bitmap =
                new BinaryBitmap(
                        new HybridBinarizer(
                                new BufferedImageLuminanceSource(
                                        image
                                )
                        )
                );

        Result result =
                new MultiFormatReader()
                        .decode(bitmap);

        return result.getText();
    }
}