import { noHopeSupply } from "./joshpage";
const website = new noHopeSupply;
const fs = require('fs');

test('Add to Cart', async () => {
    await website.navigate();
    await website.driver.sleep(3000);
    await website.scrollToElement(website.shirt);
    await website.click(website.shirt);
    await website.scrollToElement(website.size);
    await website.click(website.size);
    await website.scrollToElement(website.cQuantity);
    await website.click(website.cQuantity);
    await website.click(website.quantity);
    await website.scrollToElement(website.addToCartButton);
    await website.click(website.addToCartButton);
    await fs.writeFile(`${__dirname})/addToCart.png`,
            await website.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('add to cart test');
            });
    await website.addToCart();
});

test('Checkout', async () => {
    await website.navigate();
    await website.driver.sleep(3000);
    await website.scrollToElement(website.shirt);
    await website.click(website.shirt);
    await website.scrollToElement(website.size);
    await website.click(website.size);
    await website.scrollToElement(website.cQuantity);
    await website.click(website.cQuantity);
    await website.click(website.quantity);
    await website.scrollToElement(website.addToCartButton);
    await website.click(website.addToCartButton);
    await website.scrollToElement(website.checkout);
    await website.click(website.checkout);
    await website.scrollToElement(website.continue);
    await website.click(website.continue);
    await website.setInput(website.email, "testemail@gmail.com");
    await website.setInput(website.fullName, "Josh Powell");
    await website.setInput(website.streetAddress, "123 Rich Lane");
    await website.setInput(website.apartment, "#1");
    await website.setInput(website.city, "Olympus");
    await website.scrollToElement(website.state);
    await website.click(website.state);
    await website.setInput(website.zipcode, "12345");
    await website.scrollToElement(website.continue);
    await website.click(website.continue); 
    await website.click(website.confirm);
    await website.scrollToElement(website.continue);
    await website.click(website.continue);
    await fs.writeFile(`${__dirname})/checkoutTest.png`,
            await website.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('checkout test');
            });
    await website.checkoutTest();
});

test('Header Links', async () => {
    await website.navigate();
    await website.driver.sleep(3000);
    await website.hover(website.shop);
    await website.click(website.allProducts);
    await website.hover(website.shop);
    await website.click(website.shirt);
    await website.hover(website.shop);
    await website.click(website.hats);
    await website.hover(website.shop);
    await website.click(website.blankets);
    await website.hover(website.shop);
    await website.click(website.clubExclusives);
    await website.click(website.home);
    await website.click(website.noHopeClub);
    await fs.writeFile(`${__dirname})/headerLinkTest.png`,
            await website.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('header test');
            });
    await website.headerLinks();   
});

test('Footer Links', async () => {
    await website.navigate();
    await website.driver.sleep(3000);
    await website.scrollToElement(website.returnsFAQ);
    await website.click(website.returnsFAQ);
    await website.scrollToElement(website.contact);
    await website.click(website.contact);
    await website.scrollToElement(website.privacyPolicy);
    await website.click(website.privacyPolicy);
    await website.scrollToElement(website.termsofService);
    await website.click(website.termsofService);
    await website.driver.quit();
});

test('Socials', async () => {
    await website.navigate();
    await website.driver.sleep(3000);
    await website.scrollToElement(website.insta);
    await website.click(website.insta);
    await website.tabSwitch();
    await website.scrollToElement(website.twitter);
    await website.click(website.twitter);
    await website.tabSwitch();
    await website.scrollToElement(website.tiktok);
    await website.click(website.tiktok);
    await website.tabSwitch();
    await website.driver.quit();
});