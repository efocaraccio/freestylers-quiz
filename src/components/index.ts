import searchRoutes from "./search/routes";
import countryRoutes from "./country/routes";
import freestylerRoutes from "./freestyler/routes";
import questionsRoutes from "./question/routes";


// Exports every endpoint as array
export default [...searchRoutes,...countryRoutes,...freestylerRoutes,...questionsRoutes];