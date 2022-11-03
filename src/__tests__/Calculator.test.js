import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('test snapshop', () => {
  it('should render Calculator', () => {
    const renderCalculator = renderer.create(<Calculator />).toJSON();
    expect(renderCalculator).toMatchSnapshot();
  });
});

describe('test with testing library', () => {
  test('should work for addition', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('16')).toBeInTheDocument();
  });

  test('should work for subtraction', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('96')).toBeInTheDocument();
  });

  test('should work for multiplication', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('15')).toBeInTheDocument();
  });

  test('should work for division', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('16')).toBeInTheDocument();
  });
});
