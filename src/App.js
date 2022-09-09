import Anasayfa from './Anasayfa';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  // const isim = 'barbaros';
  // const soyad = 'ciga';
  // const yas = 30;
  // const kullaniciadi = 'bciga';

  return (
    <div className="App">
      {/* <Anasayfa name="buğra" soyad="davut" yas="27" username="bdavut" /> ------- Manuel props girişi */}
      {/* <Anasayfa name={isim} surname={soyad} age={yas} username={kullaniciadi} /> ---- değişken olarak özelliklerimizi çağırdık */}

      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
