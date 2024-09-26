import {Actions, Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const fs = require('fs');

interface Options {
    driver?: WebDriver;
    url?: string;
};

export class BasePage {
    driver: WebDriver;
    url: string;

    constructor(options?: Options) {
        if(options && options.driver) this.driver = options.driver
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
        if(options && options.url) this.url = options.url
    };
    async navigate(url?:string): Promise<void> {
        await this.driver.manage().window().maximize();
        if(url) return await this.driver.get(url) //await this.navigate('urlinhere')
        else if (this.url) return await this.driver.get(this.url) //pageObjects url
        else return Promise.reject('BasePage needs a URL in the test or the page object.');
    };
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    async click(elementBy: By): Promise<void> {
        return (await this.getElement(elementBy)).click();
    };
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    };
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText();
    };
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return(await this.getElement(elementBy)).getAttribute(attribute);
    };
    actionWiggle(actions: Actions, orgElement: WebElement, moveDuration: number = 100) : Actions {
        return actions.move({origin: orgElement, duration: moveDuration})
        .move({origin: orgElement, x:5, y:0, duration: moveDuration})
        .move({origin: orgElement, x:0, y:5, duration: moveDuration})
        .move({origin: orgElement, x:5, y:0, duration: moveDuration})
        .move({origin: orgElement, x:0, y:5, duration: moveDuration})
        .pause(moveDuration);
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
}