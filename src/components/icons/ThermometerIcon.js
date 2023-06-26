const ThermometerIcon = ({
  width = '30px',
  height = '30px',
  className = 'anticon',
  style = {}
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height={height}
    width={width}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    transform="rotate(0)"
    style={{ ...style }}
    className={className}
  >
    <g strokeWidth="0"></g>
    <g strokeLinecap="round" strokeLinejoin="round"></g>
    <g>
      <path d="M15,16a3,3,0,1,1-4-2.816V5a1,1,0,0,1,2,0v8.184A2.99,2.99,0,0,1,15,16ZM16,5v5.262A7,7,0,0,1,11.984,23a7.194,7.194,0,0,1-.827-.049,7.067,7.067,0,0,1-6.07-5.835A6.986,6.986,0,0,1,8,10.261V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z"></path>
    </g>
  </svg>
);

export default ThermometerIcon;
