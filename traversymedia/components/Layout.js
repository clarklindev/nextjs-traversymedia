import Navbar from './Navigation/Navbar';

const Layout = props => (
	<div>
		<Navbar />
		{props.children}
	</div>
);

export default Layout;
