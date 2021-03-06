import Circle1 from '../public/svg/circle1.svg';
import Circle2 from '../public/svg/circle2.svg';

export default function MainSvg() {
  return (
    <div id="circle">
      <div className="circleWrap" id="circle1">
        <div><Circle1 /></div>
      </div>
      <div className="circleWrap" id="circle2">
        <div><Circle2 /></div>
      </div>
    </div>
  )
}