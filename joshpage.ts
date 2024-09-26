import { BasePage } from "./basepage";
import { By } from "selenium-webdriver";
const fs = require('fs');

export class noHopeSupply extends BasePage {
    insta: By = By.xpath ('(//a[@href="https://instagram.com/nohopesupply"])[3]');
    twitter: By = By.xpath ('(//a[@href="https://twitter.com/nohopesupply"])[2]');
    tiktok: By = By.xpath ('(//a[@href="https://www.tiktok.com/@nohopesupply"])[2]');
    shirt: By = By.xpath ('(//div[@class="product-tile"])[1]');
    size: By = By.xpath ('(//div[@class="radio-button radio-button--narrow"])[2]');
    addToCart: By = By.xpath ('(//button[@class="button button--primary button--expand"])[1]');
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
    email: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[1]');
    fullName: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[2]');
    streetAddress: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[3]');
    apartment: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[4]');
    city: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[5]');
    country: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[6]');
    state: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[7]');
    zipcode: By = By.xpath ('(//div[@class="sc-gQaihK igqQIT"])[8]')


    constructor() {
        super({url: 'https://nohopesupply.com/en-usd'});
    };

    //for links
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
    async canHover(elementBy: By) {
        const hover = this.driver.actions();
        const startElement = await this.getElement(elementBy);
        await this.actionWiggle(hover, startElement, 100);
        await hover.perform();
        await fs.writeFile(`#{__dirname}/hoverPhoto.png`,
            await this.driver.takeScreenshot(), "base64",
            (e) => {
                if(e) console.error(e)
                    else console.log
            }
        )
    };
};