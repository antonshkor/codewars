function updateLight(light) {

    switch (light) {
        case "green":
            light = "yellow";
            break;
        case "yellow":
            light = "red";
            break;
        case "red":
            light = "green";
            break;
        default:
            light = "error";
            break;
    }
    return light;

}