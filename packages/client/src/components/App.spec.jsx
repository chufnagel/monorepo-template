/* global beforeEach describe expect test */
import { shallow } from "enzyme";
import App from "App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  })
  test("It should match its snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
