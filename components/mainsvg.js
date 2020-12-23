import Circle1 from '../public/svg/circle1.svg';
import Circle2 from '../public/svg/circle2.svg';
import Circle3 from '../public/svg/circle3.svg';
export default function MainSvg() {
  return (
    <div id="circle">
      <div id="circle1">
        <div><Circle1 /></div>
      </div>
      <div id="circle2">
        <div><Circle2 /></div>
      </div>
      <div id="circle3">
        <div><Circle3 /></div>
      </div>
    </div>
  )
}