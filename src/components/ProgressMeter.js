

const ProgressMeter = (props) => {
    const {
        percent = 0,
        width = 100,       
        height = 10,       
        rounded = true,    
        color = "#FFCC00", 
        animate = true,    
        label = null         
    } = props;

    const r = rounded ? Math.ceil(height / 2) : 0;
    const w = percent ? Math.max(height, width * Math.min(percent, 1)): 0;
    const style = animate ? { "transition": "width 500ms, fill 250ms" } : null;

    return (
        <svg width={width} height={height} aria-label={label}>
            <rect width={width} height={height} fill="#D5A100" rx={r} ry={r}/>
            <rect width={w} height={height} fill={color} rx={r} ry={r}   style={style}/>
        </svg>
    );
}

export default ProgressMeter