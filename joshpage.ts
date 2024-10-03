import { BasePage } from "./basepage";
import { By } from "selenium-webdriver";
const fs = require('fs');

export class noHopeSupply extends BasePage {
    insta: By = By.xpath ('(//li[@class="footer__list-item footer__list-item--social"])[1]');
    twitter: By = By.xpath ('(//li[@class="footer__list-item footer__list-item--social"])[2]');
    tiktok: By = By.xpath ('(//li[@class="footer__list-item footer__list-item--social"])[3]');
    shirt: By = By.xpath ('(//div[@class="product-tile"])[1]');
    size: By = By.xpath ('(//div[@class="radio-button radio-button--narrow"])[2]');
    cQuantity: By = By.xpath ('(//select[@class="select-field__select"])');
    quantity: By = By.xpath ('(//option[@value="2"])');
    addToCartButton: By = By.xpath ('(//button[@class="button button--primary button--expand"])[1]');
    home: By = By.xpath ('(//li[@class="header__list-item"])[1]');
    shop: By = By.xpath ('(//li[@class="header__list-item"])[2]');
    noHopeClub: By = By.xpath ('(//li[@class="header__list-item"])[3]');
    allProducts: By = By.xpath ('(//li[@class="header__dropdown-item"])[11]');
    shirts: By = By.xpath ('(//li[@class="header__dropdown-item"])[12]');
    hats: By = By.xpath ('(//li[@class="header__dropdown-item"])[13]');
    blankets: By = By.xpath ('(//li[@class="header__dropdown-item"])[14]');
    clubExclusives: By = By.xpath ('(//li[@class="header__dropdown-item"])[15]');
    checkout: By = By.xpath ('(//button[@type="submit"])');
    continue: By = By.xpath ('(//button[@role="button"])');
    email: By = By.id ('[id="email.address__label"]');
    fullName: By = By.id ('[id="shippingAddress.name__label"]');
    streetAddress: By = By.id ('[id="shippingAddress.address1__label"]');
    apartment: By = By.id ('[id="shippingAddress.address2__label"]');
    city: By = By.id ('[id="shippingAddress.address1__input"]');
    country: By = By.xpath ('(//option[@value="US"])');
    sState: By = By.xpath ('(//select[@name="shippingAddress.state"])');
    state: By = By.xpath ('(//option[@value="UT"])');
    zipcode: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[8]');
    confirm: By = By.xpath ('(//span[@class="sc-jtQUzJ fFaa-di"])[2]');
    returnsFAQ: By = By.xpath ('(//a[text()="Returns & FAQ"])');
    contact: By = By.xpath ('(//a[text()="Contact"])');
    privacyPolicy: By = By.xpath ('(//a[text()="Privacy Policy"])');
    termsofService: By = By.xpath ('(//a[text()="Terms of Service"])');

    constructor() {
        super({url: 'https://nohopesupply.com/en-usd'});
    };

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000);
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };
    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()
    };
    async hover(elementBy: By) {
        const hover = this.driver.actions();
        const startElement = await this.getElement(elementBy);
        await this.actionWiggle(hover, startElement, 100);
        await hover.perform();
    };
    async addToCart() {
        let myTabs = await this.driver.getAllWindowHandles();
        await  this.driver.switchTo().window(myTabs[1]);
        fs.writeFile(`${__dirname})/addToCart.png`,
            await this.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('add to cart test');
            });
            await this.driver.close();
            await this.driver.switchTo().window(myTabs[0]);
    };
    async checkoutTest() {
        let myTabs = await this.driver.getAllWindowHandles();
        await  this.driver.switchTo().window(myTabs[1]);
        fs.writeFile(`${__dirname})/checkoutTest.png`,
            await this.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('checkout test');
            });
            await this.driver.close();
            await this.driver.switchTo().window(myTabs[0]);
    };
    async headerLinks() {
        let myTabs = await this.driver.getAllWindowHandles();
        await  this.driver.switchTo().window(myTabs[1]);
        fs.writeFile(`${__dirname})/headerLinkTest.png`,
            await this.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('header test');
            });
            await this.driver.close();
            await this.driver.switchTo().window(myTabs[0]);
    };
};