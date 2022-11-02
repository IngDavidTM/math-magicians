import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('should render Calculator', () => {
  const renderCalculator = renderer.create(<Calculator />).toJSON();
  expect(renderCalculator).toMatchSnapshot();
});
