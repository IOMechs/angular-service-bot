# Angular Service Bot Package
##### @iomechs/angular-service-bot

[![Actions Status](https://github.com/iomechs/angular-service-bot/workflows/CI/badge.svg)](https://github.com/iomechs/angular-service-bot/actions)


<a href="https://www.npmjs.com/package/@iomechs/angular-service-bot"><img src="https://img.shields.io/npm/v/@iomechs/angular-service-bot.svg" alt="npm version" ></a>
<a href="https://www.npmjs.com/package/@iomechs/angular-service-bot"><img src="https://img.shields.io/github/stars/IOMechs/angular-service-bot.svg?style=social&label=Star&style=flat-square" alt="github stars" ></a>
<a href="https://www.npmjs.com/package/@iomechs/angular-service-bot"><img src="https://img.shields.io/npm/l/@iomechs/angular-service-bot.svg?style=flat-square" alt="license" ></a>

<a href="https://www.npmjs.com/package/@iomechs/angular-service-bot"><img src="https://img.shields.io/npm/dt/@iomechs/angular-service-bot.svg?style=flat-square" alt="npm downloads total" ></a>
<a href="https://www.npmjs.com/package/ngx-device-detector"><img src="https://img.shields.io/npm/dm/@iomechs/angular-service-bot.svg" alt="npm downloads/month" ></a>


A simple, easily to use package to use [servicebot.io](https://www.servicebot.io/) with Angular apps.

## Demo

[https://iomechs.github.io/angular-service-bot/demo](https://iomechs.github.io/angular-service-bot/demo)

## Docs

[https://iomechs.github.io/angular-service-bot](https://iomechs.github.io/angular-service-bot)

## Dependencies


## Usage

Install the package in your project's folder by using npm or yarn:
```bash
npm install @iomechs/angular-service-bot --save

# OR

yarn add @iomechs/angular-service-bot -S
```

Import AngularServiceBotModule in your AppModule as below:

```typescript
import { AngularServiceBotModule } from '@iomechs/angular-service-bot';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularServiceBotModule, // <-- here
  ]
});
```

## License

MIT © [IOMechs](https://github.com/IOmechs)
