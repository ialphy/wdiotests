import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';


describe('Auth', () => {
    beforeEach(function (){
        LoginPage.open();
    });

    afterEach(function (){
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('johnmons@test.com');
        LoginPage.setPassword('331343');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent ', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided ', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();

    });
});




