import renderer from "react-test-renderer";
import CalculatorPage from "./pages/CalculatorPage";

it("should render CalculatorPage", () => {
  const renderCalculatorPage = renderer.create(<CalculatorPage />).toJSON();
  expect(renderCalculatorPage).toMatchSnapshot();
});
