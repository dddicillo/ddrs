import { createMount } from "@material-ui/core/test-utils";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import Button from "@material-ui/core/Button";

jest.mock("@auth0/auth0-react");

describe("<LogoutButton />", () => {
    let mount;
    beforeAll(() => {
        mount = createMount();
    });

    let wrapper;
    const mockLogout = jest.fn();
    beforeEach(() => {
        useAuth0.mockReturnValue({
            logout: mockLogout,
        });
        wrapper = mount(<LogoutButton />);
    });

    it("should render 'Log Out'", () => {
        expect(wrapper.find({ children: "Log Out" }).length).toBeGreaterThan(0);
    });

    it("should call 'logout' on click", () => {
        const button = wrapper.find(Button);
        button.simulate("click");
        expect(mockLogout).toHaveBeenCalled();
    });
});