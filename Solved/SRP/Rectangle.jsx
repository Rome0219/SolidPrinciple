class Rectangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height
        };
    }

    calculateArea() {
        const { width, height } = this.state;
        return width * height;
    }

    render() {
        return (
            <div>
                <p>Area: {this.calculateArea()}</p>
            </div>
        );
    }
}

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: props.radius
        };
    }

    calculateArea() {
        const { radius } = this.state;
        return 3.14 * (radius ** 2);
    }

    render() {
        return (
            <div>
                <p>Area: {this.calculateArea()}</p>
            </div>
        );
    }
}
