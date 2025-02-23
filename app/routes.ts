import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/LandingPage.tsx", [
        index("routes/home.tsx"),
        route("info-pendaftaran", "routes/info-pendaftaran.tsx"),
    ]),
] satisfies RouteConfig;
