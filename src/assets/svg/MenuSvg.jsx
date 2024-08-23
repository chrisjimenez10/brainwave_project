const MenuSvg = ({ openNavigation }) => {
  //Here, we are creating an SVG element and using the rect element (which creates rectangles) to create two horizontal lines that transform and rotate based on state of "openNavigation" to form an "X" shape --> The rect element has special properties and we use the "y" for the y-axis (NOTE: In SVG coordinate system, the y-axis INCREASES going DOWN)

  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        //Here, the transition-all and origin-center CSS properties ensure a smooth transition for the rotation of the lines
        className="transition-all origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1" //The "rx" attribute refers to the roundness of the corners of the rectangle
        fill="white" //The "fill" attribute refers to the color of the rectangle
        transform={`rotate(${openNavigation ? "45" : "0"})`} //The transform attribute is used to assign a transformation-style and we use "rotate" here
      />
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
