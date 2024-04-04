import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import StatBoxes from './components/statboxes/StatBoxes.jsx';
import Classes from './components/classes/Classes.jsx';
import BMIcalculater from './components/BMIcalculater/BMI.jsx'
import Trainer from './components/Trainer/Trainer.jsx';
import PurchaseFromUs from './components/PURCHASE-FROM-US/Purchase.jsx';
import ReviewClient from './components/REVIEW CLIENT/REVIEW-CLIENT.jsx';
import ContactUs from './components/contacts/contacts.jsx';


function App() {

  return (
    <div>
        <Navbar/>
        <Hero/>
        <StatBoxes/>
        <Classes/>
        <BMIcalculater/>
        <Trainer/>
        <PurchaseFromUs/>
        <ReviewClient/>
        <ContactUs/>
    </div>
  )
}

export default App