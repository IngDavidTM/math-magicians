import renderer from 'react-test-renderer';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

it('should render Home page', () => {
  const renderHome = renderer
    .create(<BrowserRouter><Home /></BrowserRouter>)
    .toJSON();
  expect(renderHome.toMatchSnapshot();
})