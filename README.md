# React Weather App

Bu proje, React kullanılarak geliştirilmiş bir hava durumu uygulamasıdır. Uygulama, OpenWeatherMap API'sini kullanarak gerçek zamanlı hava durumu verilerini ve saatlik tahminleri gösterir.
Geliştirilecek Özellikler: Seçilen şehrin sıcaklık, nem, rüzgar hızı gibi özellikler eklenecek.Çoklu şehir desteği özeelliği eklenecek ve UI iyileştirmeleri yapılacak.

![weatherapp](https://github.com/MelikeDemiralayy/weatherApp/assets/147873534/e8392e78-489d-4eb2-af5e-153e450f67bf)


## Özellikler

- Kullanıcılar, arama kutusuna bir şehir adı girerek hava durumu bilgilerini alabilirler.
- Anlık hava durumu bilgileri şehir adı, sıcaklık, hava durumu açıklaması ve ikonla birlikte gösterilir.
- Saatlik hava tahminleri, birkaç saatlik dilimler halinde gösterilir.
- Uygulama, görsel açıdan hoş bir arayüze sahiptir ve Tailwind CSS kullanılarak tasarlanmıştır.

## Nasıl Başlatılır

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/your-username/react-weather-app.git
2. Proje dizinine gidin:

   ```bash
   cd react-weather-app

3. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install 


  4.OpenWeatherMap API anahtarınızı api/api.js dosyasında güncelleyin:

   ```bash
    const apiKey = "YOUR_API_KEY";
```

5.Uygulamayı başlatın:
   ```bash
    npm run dev 
```
Bu komut uygulamayı http://localhost:5173 adresinde başlatacaktır.


## Kullanılan Teknolojiler:

- React: https://reactjs.org/
- Tailwind CSS: https://tailwindcss.com/
- OpenWeatherMap API: https://openweathermap.org/api
- Axios:https://axios-http.com/docs/intro
- Vite:https://vitejs.dev/

## Demo:
https://weather-app-react-amber-nine.vercel.app/
