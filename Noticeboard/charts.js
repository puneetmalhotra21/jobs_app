import React  from 'react';

class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 25
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      percentage: event.target.value
    });
  }

  render() {
    return (
      <div>
     
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <RoundProgressBar
            value={this.state.percentage}
            stroke = {'#b9332f'}
            max = {210}
            text = "UNAVAILABLE"
            />
            <div>
              <input 
                id="progressInput" 
                type="range" 
                min="0" 
                max="210"
                step="1"
                value={this.state.percentage}
                onChange={this.handleChangeEvent}/>
          </div>
          <RoundProgressBar
            value={210-this.state.percentage}
            stroke = {'#73bc8d'}
            max = {210}
            text = "AVAILABLE"
            />
        </div>
        </div>
    );
  }
}



function RoundProgressBar(props) {
  const size = props.size;
  const radius = (props.size - props.strokeWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * props.value / props.max;
  const percentage = (props.value / props.max * 100).toFixed();
  return (
    <svg
      width = {props.size/2}
      height = {props.size}
      viewBox = {viewBox}
    >
      <circle
        fill = {'none'}
        stroke = {'#ddd'}
        cx = { props.size / 2 }
        cy = { props.size / 2 }
        r = { radius }
        strokeWidth = {`${props.strokeWidth}px`} />
      <circle
        fill = {'none'}
        stroke = {props.stroke}
        strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeDasharray = {dashArray}
        strokeDashoffset = {dashOffset}
        cx={props.size / 2}
        cy={props.size / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
        transform={`rotate(-90 ${props.size / 2} ${props.size / 2})`}
      />
      
      <text
        x="55%"
        y="50%"
        dy="0.4rem"
        textAnchor="end"
        fill={props.stroke}
        style={{
          fontSize:'2.5rem',
          fontFamily:'Varela Round',
          fontWeight: 'bold',
        }}
      >
      {`${props.value}`}
      </text>
      <text
        x="55%"
        y="50%"
        dy=".4rem"
        textAnchor="start"
        fill={props.stroke}
        style={
          {
            fontSize:'1.4rem',
            fontFamily:'Varela Round',
            fontWeight: 'bold'   
          }
        }
      > 
        {`/${props.max}`}
      </text>
      <text
        x="50%"
        y="50%"
        dy="1.5rem"
        textAnchor="middle"
        fill={props.stroke}
        style={
          {
            fontSize:'1rem',
            fontFamily:'Varela Round',
            fontWeight: 'bold',
          }
        }
      >
        {props.text}
      </text>
      <text
        x="50%"
        y="50%"
        dy="2.7rem"
        textAnchor="middle"
        fill={props.stroke}
        style={
          {
            fontSize:'1rem',
            fontFamily:'Varela Round',
          }
        }
        >
        {`${percentage}%`}
      </text>
    </svg>
  );
}

RoundProgressBar.defaultProps = {
  size: 200,
  value: 25,
  max: 100,
  strokeWidth: 10,
  stroke: 'red',
  text: ""
}


export default Charts;