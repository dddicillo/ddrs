import { mount } from "enzyme";
import App from "./App";
import MenuBar from "./components/MenuBar";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should render <MenuBar />", () => {
    expect(wrapper.find(MenuBar).length).toEqual(1);
  });
});