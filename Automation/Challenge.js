import { Selector } from 'testcafe';

fixture('Login').page('www.jobjack.co.za');

// Navigation to Registration page
const jobSeeker = Selector('a')
    .withText('Job seeker');
const findAJob = Selector('a')
    .withText('Find a job')
    .withAttribute('class','btn btn-jj-3 mb-0 jj-bg-green');

// Registration page elements
const firstName = Selector('input')
    .withAttribute('formcontrolname','firstName')
const lastName = Selector('input')
    .withAttribute('formcontrolname','lastName')
const mobileNumber = Selector('input')
    .withAttribute('formcontrolname','phoneNumber');
const whatsAppNumber = Selector('ng-select')
    .withAttribute('formcontrolname','hasWhatsapp');
const sameAsMobileNumber = Selector('span')
    .withText('Same as mobile number');
const spanWhatsAppNotification = Selector('ng-select')
    .withAttribute('formcontrolname','whatsappOptIn');
const whatsAppNotificationYes = Selector('span')
    .withText('Yes');
const email = Selector('input')
    .withAttribute('formcontrolname','email');
const spanLocation = Selector('ng-select')
    .withAttribute('placeholder','Type and select from suggested list');
const divOption = Selector('div')
    .withAttribute('role','option');
const password = Selector('input')
    .withAttribute('formcontrolname','password')
const passwordReveal = Selector('button')
    .withAttribute('id','button_addon2')
const spanHowDidYouHear = Selector('ng-select')
    .withAttribute('placeholder','How did you hear about us?')
const radio = Selector('div')
    .withAttribute('class','ng-option').withText('Radio')
const register = Selector('button')
    .withText('Register');

test('navigateAndFillInRegistrationDetails', async t => {
    await t.maximizeWindow()

    // Navigate to registration
    await t.click(jobSeeker)
    await t.click(findAJob)

    // Registration page populate fields
    await t.typeText(firstName,'Job')
    await t.typeText(lastName,'Jack')
    await t.typeText(mobileNumber,'0123456789')
    await t.click(whatsAppNumber)
    await t.click(sameAsMobileNumber)
    await t.click(spanWhatsAppNotification)
    await t.click(whatsAppNotificationYes)
    await t.typeText(email,'anastasioszogalis@gmail.com')
    await t.typeText(spanLocation,'South Africa, Bellville, Bellville Park')
    await t.click(divOption)
    await t.typeText(password,'password')
    await t.click(passwordReveal)
    await t.click(spanHowDidYouHear)
    await t.click(radio)

    // Wait for 30 seconds
    await t.wait(30000)
    
    // Register
    await t.hover(register)
});
