import renderer from 'react-test-renderer';
import Home from '../pages/Home';

it('should render Home page', () => {
  const renderHome = renderer
    .create(<Home />)
    .toJSON();
  expect(renderHome).toMatchSnapshot();
});
