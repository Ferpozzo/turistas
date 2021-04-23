import { localeRouter } from "./locales";
import { serviceRouter } from "./services";
import { userRouter } from "./user";
import { authRouter } from '../middleware/auth'

const routes = [userRouter, localeRouter, serviceRouter, authRouter]

export { routes }