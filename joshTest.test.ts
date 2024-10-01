import { noHopeSupply } from "./joshpage";
const website = new noHopeSupply;

test('Add to Cart', async () => {
    await website.navigate();
    await website.driver.sleep(2000);
    await website.scrollToElement(website.shirt);
    await website.click(website.shirt);
    await website.scrollToElement(website.size);
    await website.click(website.size);
    await website.scrollToElement(website.quantity);
    await website.click(website.quantity);
    await website.scrollToElement(website.addToCartButton);
    await website.click(website.addToCartButton);
    await website.addToCart();
});

test('Checkout', async () => {
    await website.navigate();
    await website.driver.sleep(2000);
    await website.scrollToElement(website.shirt);
    await website.click(website.shirt);
    await website.scrollToElement(website.size);
    await website.click(website.size);
    await website.scrollToElement(website.quantity);
    await website.click(website.quantity);
    await website.scrollToElement(website.addToCartButton);
    await website.click(website.addToCartButton);
    await website.scrollToElement(website.checkout);
    await website.click(website.checkout);
    await website.scrollToElement(website.continue);
    await website.click(website.continue);
    await website.setInput(website.fullName, "Josh Powell");
    await website.setInput(website.streetAddress, "123 Rich Lane");
    await website.setInput(website.email, "testemail@gmail.com");
    await website.setInput(website.apartment, "#1");
    await website.setInput(website.city, "Olympus");
    await website.click(website.country);
    await website.click(website.state);
    await website.setInput(website.zipcode, "12345");
    await website.scrollToElement(website.continue);
    await website.click(website.continue); 
    await website.click(website.confirm);
    await website.scrollToElement(website.continue);
    await website.click(website.continue);
    await website.checkoutTest();
});

test('Header Links', async () => {
    await website.navigate();
    await website.driver.sleep(2000);
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
    await website.headerLinks();
    
});

test('Footer Links', async () => {
    await website.navigate();
    await website.driver.sleep(2000);
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
    await website.driver.sleep(2000);
    await website.scrollToElement(website.insta);
    await website.click(website.insta);
    await website.goBack();
    await website.scrollToElement(website.twitter);
    await website.click(website.twitter);
    await website.goBack();
    await website.scrollToElement(website.tiktok);
    await website.click(website.tiktok);
    await website.goBack();
    await website.driver.quit();
});