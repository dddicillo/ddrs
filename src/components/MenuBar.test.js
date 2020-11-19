import { createMount } from "@material-ui/core/test-utils";
import { useAuth0 } from "@auth0/auth0-react";
import MenuBar from "./MenuBar";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

jest.mock("@auth0/auth0-react");

describe("<MenuBar />", () => {
    let mount;
    beforeAll(() => {
        mount = createMount();
    });

    describe("Logged In", () => {
        let wrapper;
        beforeEach(() => {
            useAuth0.mockReturnValue({
                isAuthenticated: true,
            });
            wrapper = mount(<MenuBar />);
        });

        it("should render title", () => {
            const components = wrapper.find({ children: "DDRS" });
            expect(components.length).toBeGreaterThan(0);
        });

        it("should render logout button", () => {
            expect(wrapper.find(LogoutButton).length).toEqual(1);
        });

        it("should not render login button", () => {
            expect(wrapper.find(LoginButton).length).toEqual(0);
        });
    });

    describe("Logged Out", () => {
        let wrapper;
        beforeEach(() => {
            useAuth0.mockReturnValue({
                isAuthenticated: false,
            });
            wrapper = mount(<MenuBar />);
        });

        it("should render login button", () => {
            expect(wrapper.find(LoginButton).length).toEqual(1);
        });

        it("should not render logout button", () => {
            expect(wrapper.find(LogoutButton).length).toEqual(0);
        });
    });
});