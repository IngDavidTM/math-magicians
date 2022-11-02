import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('should render NavBar', () => {
  const renderNavBar = renderer
    .create(<BrowserRouter><NavBar /></BrowserRouter>)
    .toJSON();
  expect(renderNavBar).toMatchSnapshot();
});
