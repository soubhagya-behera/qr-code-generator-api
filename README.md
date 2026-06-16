# ⚡ QR Code Generator & Scanner

A modern full-stack web application built with **Java, Spring Boot, Thymeleaf, ZXing, HTML, CSS, and JavaScript** that allows users to generate QR codes instantly and scan existing QR codes to extract their content.

---

## 🚀 Features

### 🔳 QR Code Generator

* Generate QR codes from:

  * URLs
  * Plain Text
  * Email Addresses
  * Phone Numbers
* Instant QR preview
* Download generated QR as PNG
* One-click clear functionality

### 🔍 QR Code Scanner

* Upload QR code images
* Decode QR content instantly
* Detect content type automatically:

  * URL
  * Email
  * Phone Number
  * Text
* Copy scanned content to clipboard
* Open detected URLs directly in a new tab

### 🎨 Modern UI/UX

* Glassmorphism design
* Animated gradient background
* Floating glow effects
* Responsive mobile layout
* Interactive hover animations
* Custom toast notifications

---

## 🛠 Tech Stack

### Backend

* Java 17
* Spring Boot
* Thymeleaf
* ZXing (QR Generation & Decoding)

### Frontend

* HTML5
* CSS3
* JavaScript

### Build Tool

* Maven

---

## 📸 Screenshots

### QR Generator

Add screenshot here

### QR Scanner

Add screenshot here

### Mobile View

Add screenshot here

---

## 📂 Project Structure

src
├── main
│ ├── java
│ │ ├── controller
│ │ ├── service
│ │ └── model
│ ├── resources
│ │ ├── static
│ │ │ ├── css
│ │ │ └── js
│ │ └── templates
│ └── application.properties

---

## ⚙️ Installation

### Clone Repository

git clone https://github.com/your-username/qr-code-generator-scanner.git

cd qr-code-generator-scanner

### Run Application

mvn spring-boot:run

Application starts at:

http://localhost:8080

---

## 💡 How It Works

### QR Generation Flow

1. User enters text or URL
2. Spring Boot receives request
3. ZXing generates QR image
4. QR is returned as PNG
5. User can download instantly

### QR Scanning Flow

1. User uploads QR image
2. Image sent to backend
3. ZXing decodes QR
4. Content type detected
5. Result displayed in UI

---

## 🌟 Highlights

* Full Stack Java Project
* Real-world Utility Application
* File Upload Handling
* QR Generation & Decoding
* Responsive Design
* Modern UI Animations
* Clipboard Integration
* URL Detection Logic

---

## 📈 Future Enhancements

* QR History
* Dark / Light Theme Toggle
* Camera-Based QR Scanning
* QR Customization (Colors & Logos)
* User Authentication
* Cloud Storage Integration

---

## 👨‍💻 Author

Soubhagya

Java Full Stack Developer

If you found this project useful, consider giving it a ⭐ on GitHub.
