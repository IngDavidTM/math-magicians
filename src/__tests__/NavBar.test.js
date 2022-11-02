import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';
import { BrowserRouter } from 'react-router-dom';

it('should render NavBar', () => {
  const renderNavBar = renderer
    .create(<BrowserRouter><NavBar/></BrowserRouter>)
    .toJSON();
  expect(renderNavBar).toMatchSnapshot();
})