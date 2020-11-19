import { createMount } from "@material-ui/core/test-utils";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "./Profile";

jest.mock("@auth0/auth0-react");

describe("<Profile />", () => {
    let mount;
    beforeAll(() => {
        mount = createMount();
    });

    let wrapper;
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
    };
    beforeEach(() => {
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            getAccessTokenSilently: jest.fn(),
            user,
        });
        wrapper = mount(<Profile />);
    });

    it("should render the user's name", () => {
        expect(wrapper.find({ children: user.name }).length).toEqual(1);
    });
});