const CurvedLine = ({ startX, startY, control1X, control1Y, control2X, control2Y, endX, endY, strokeWidth = 2, strokeColor }) => {
    const svgWidth = Math.abs(endX - startX)+ strokeWidth *2;
    const svgHeight = Math.abs(endY - startY) + strokeWidth *2;
    return (
      <svg width={svgWidth} height={svgHeight} style={{ overflow: 'visible', position: 'absolute', top: 0, left:0}}>
        <path 
          d={`M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${endX} ${endY}`} 
          stroke={strokeColor} 
          strokeWidth={strokeWidth} 
          fill="transparent" 
        />
      </svg>
    );
  };
  
  export default CurvedLine;