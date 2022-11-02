import renderer from "react-test-renderer";
import Quote from "../pages/Quote";

it("should render Quote", () => {
  const renderQuote = renderer.create(<Quote />).toJSON();
  expect(renderQuote).toMatchSnapshot();
});
