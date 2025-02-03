import { render } from 'preact';
import './index.less';
import { Main } from './Main';

// Az alkalmazás fő komponense
export function App()
{
	return <Main />;
}
render( <App />, document.getElementById( 'app' ) );