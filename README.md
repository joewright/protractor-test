# protractor-test
Minimal config needed to test a protractor install


### Setup
Install [nodejs](https://nodejs.org) and the [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
Clone this repo and run
```
npm run setup
```

### Running the test
In a separate shell, start webdriver-manager
```
npm run webdriver-manager
```

Run the protractor test
```
npm run protractor
```

If that passes, you win.
