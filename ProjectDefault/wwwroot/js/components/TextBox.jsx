
export class TextBox extends React.Component {

    constructor() {
        super()        
    }

    render() {
        return (<input type="text" className="form-control" />);
    }
}

let Create = function ()
{
    ReactDOM.render(<TextBox />, $("#indexbody")[0])
}

export { Create }