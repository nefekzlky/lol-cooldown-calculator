# ⏳ LoL Cooldown Calculator

---

## 📌 ENGLISH

### Description

A dynamic web application that instantly calculates new ability cooldowns based on League of Legends champions' Ability Haste, built with MVC architecture and multi-language (i18n) support.

### 🌐 Live Demo

[Coming Soon]

### 🚀 Features

- **Dynamic Data Fetching** - All champion, icon, and ability data is fetched in real-time from Riot Games Data Dragon. No hardcoded static data is used.

- **i18n Multi-Language Support** - Switch seamlessly between Turkish (tr_TR) and English (en_US) with a single click. Riot API data is also dynamically fetched based on the selected language.

- **Live Calculation** - On the Dashboard screen, when you change the Ability Haste value, data is instantly recalculated without requiring a page refresh.

- **Smart Search Algorithm** - Filter champion names in real-time without case sensitivity or special character concerns. Provides smooth usage without removing your hands from the keyboard.

- **Clean Architecture (MVC)** - The codebase is designed according to Model-View-Controller standards, using EJS partials to create a modular and maintainable interface.

### 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML5, CSS3, JavaScript
- **Data Source:** Riot Games Data Dragon API
- **Architecture:** Model-View-Controller (MVC)
- **Localization:** i18n (Internationalization)

### 📋 Requirements

- Node.js (v14 or higher)
- npm (Node Package Manager)

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nefekzlky/lol-cooldown-calculator.git
   cd lol-cooldown-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

### 📖 Usage

1. Select your desired League of Legends champion from the home page
2. View the champion's information and abilities
3. Enter the Ability Haste value
4. Instantly view the updated cooldowns
5. Switch between Turkish and English using the language selector

### 📁 Project Structure

```
lol-cooldown-calculator/
├── controllers/      # Request handling and routing layer
├── locales/          # Language files (tr.json, en.json)
├── routes/           # URL routing (Express Router)
├── services/         # Service layer for Riot API communication
├── utils/            # Mathematical calculation functions
├── views/            # EJS templates and partials (UI)
├── app.js            # Main application and Express configuration
└── package.json      # Dependencies
```

### 👨‍💻 Developer

**Necmettin Efe KIZILKAYA** - Software Engineering Student

- 🔗 [LinkedIn Profile](https://linkedin.com/in/nefekzlky)
- 🔗 [GitHub Profile](https://github.com/nefekzlky)

### 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### ⚖️ Legal Notice

This project is **not endorsed by Riot Games** and does not reflect the official views of Riot Games. League of Legends is a registered trademark of Riot Games, Inc.

The use of Riot Games Data Dragon API is governed by the [Riot Games Developer Terms of Service](https://developer.riotgames.com/terms).

---

## 📌 TÜRKÇE

### Açıklama

League of Legends şampiyonlarının yetenek hızına (Ability Haste) göre yeni bekleme sürelerini anında hesaplayan, MVC mimarisi ile geliştirilmiş çoklu dil (i18n) destekli dinamik web uygulaması.

### 🌐 Canlı Demo

[Çok Yakında Eklenecek]

### 🚀 Özellikler

- **Dinamik Veri Çekimi** - Tüm şampiyon, ikon ve yetenek verileri anlık olarak Riot Games Data Dragon üzerinden çekilir. Statik (hardcoded) veri kullanılmaz.

- **i18n Çoklu Dil Desteği** - Tek tıkla tamamen Türkçe (tr_TR) ve İngilizce (en_US) arasında geçiş yapın. Riot API verileri de seçilen dile göre dinamik olarak getirilir.

- **Canlı Hesaplama** - Sonuç ekranında (Dashboard) yetenek hızı değeri değiştirildiği an, sayfa yenilenmeden veriler anında yeniden hesaplanır.

- **Akıllı Arama Algoritması** - Şampiyon isimlerini yazarken büyük/küçük harf veya kesme işareti duyarlılığı olmadan anında filtreleme yapar. Klavyeden elinizi çekmeden akıcı kullanım sunar.

- **Temiz Mimari (MVC)** - Kod tabanı Model-View-Controller standartlarına uygun olarak tasarlanmış, EJS partials (parçalı görünümler) kullanılarak modüler ve yönetilebilir bir arayüz kurgulanmıştır.

### 🛠️ Teknoloji Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML5, CSS3, JavaScript
- **Veri Kaynağı:** Riot Games Data Dragon API
- **Mimari:** Model-View-Controller (MVC)
- **Lokalizasyon:** i18n (Uluslararası Hale Getirme)

### 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm (Node Package Manager)

### 🔧 Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/nefekzlky/lol-cooldown-calculator.git
   cd lol-cooldown-calculator
   ```

2. **Gerekli bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Uygulamayı başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcınızda açın:**
   ```
   http://localhost:3000
   ```

### 📖 Kullanım

1. Ana sayfada istediğiniz League of Legends şampiyonunu seçin
2. Şampiyonun bilgilerini ve yeteneklerini görüntüleyin
3. Yetenek Hızı (Ability Haste) değerini girin
4. Anlık olarak güncellenmiş bekleme sürelerini görüntüleyin
5. Dil seçimini değiştirerek İngilizce/Türkçe arasında geçiş yapın

### 📁 Proje Yapısı

```
lol-cooldown-calculator/
├── controllers/      # İstekleri karşılayan yönlendirici katman
├── locales/          # Dil dosyaları (tr.json, en.json)
├── routes/           # URL yönlendirmeleri (Express Router)
├── services/         # Riot API ile iletişim kuran servis katmanı
├── utils/            # Matematiksel hesaplama fonksiyonları
├── views/            # EJS şablonları ve partials (arayüz)
├── app.js            # Ana uygulama ve Express konfigürasyonu
└── package.json      # Bağımlılıklar
```

### 👨‍💻 Geliştirici

**Necmettin Efe KIZILKAYA** - Yazılım Mühendisliği Öğrencisi

- 🔗 [LinkedIn Profili](https://linkedin.com/in/nefekzlky)
- 🔗 [GitHub Profili](https://github.com/nefekzlky)

### 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasını inceleyin.

### ⚖️ Yasal Uyarı

Bu proje **Riot Games tarafından desteklenmemektedir** ve Riot Games'in resmi görüşlerini yansıtmaz. League of Legends, Riot Games, Inc.'nin tescilli markasıdır.

Riot Games Data Dragon API'sının kullanımı [Riot Games Developer Terms of Service](https://developer.riotgames.com/terms) kapsamında yönetilmektedir.

---

<div align="center">

⭐ Yapımcısını desteklemek için yıldız vermeyi unutmayın! | Don't forget to give a star to support the creator! ⭐

</div>
