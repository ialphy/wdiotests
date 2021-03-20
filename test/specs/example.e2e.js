import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('johnmons@test.com');
        LoginPage.setPassword('331343');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();


    });
});


