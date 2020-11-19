import { createMount } from "@material-ui/core/test-utils";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import Button from "@material-ui/core/Button";
jest.mock("@auth0/auth0-react");

describe("<LoginButton />", () => {
    let mount;
    beforeAll(() => {
        mount = createMount();
    });

    let wrapper;
    const mockLoginWithRedirect = jest.fn();
    beforeEach(() => {
        useAuth0.mockReturnValue({
            loginWithRedirect: mockLoginWithRedirect,
        });
        wrapper = mount(<LoginButton />);
    });

    it("should render 'Log In'", () => {
        expect(wrapper.find({ children: "Log In" }).length).toBeGreaterThan(0);
    });

    it("should call 'loginWithRedirect' on click", () => {
        const button = wrapper.find(Button);
        button.simulate("click");
        expect(mockLoginWithRedirect).toHaveBeenCalled();
    });
});