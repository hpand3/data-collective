const element = "Testing...";

class Hello extends React.Component{
	render(){
		return <h1> Hello</h1>
	}
}

ReactDOM.render(
	element,
	document.getElementById('main')
);

