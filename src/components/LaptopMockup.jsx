import Device from "react-device-frame";
import logo from '../assets/Logo/nexa.png'

const LaptopMockup = () => {
   return (
      <Device type="macbook" width={800} height={500}>
         <iframe src={logo} className="w-full h-full border-none"></iframe>
      </Device>
   );
};

export default LaptopMockup;
