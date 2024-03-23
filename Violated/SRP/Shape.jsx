class Shape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeType: props.shapeType,
            width: props.width,
            height: props.height
        };
    }

    calculateArea() {
        const { shapeType, width, height } = this.state;
        if (shapeType === 'rectangle') {
            return width * height;
        } else if (shapeType === 'circle') {
            return 3.14 * (width / 2) ** 2;
        }
    }

    render() {
        return (
            <div>
                <p>Area: {this.calculateArea()}</p>
            </div>
        );
    }
}
