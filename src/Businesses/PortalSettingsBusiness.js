import DefaultFavIcon from "Assets/img/favicon-new.ico"
import DefaultLoader from "Assets/img/bolt.gif"
import AgencyLoader from "Assets/img/loader.gif"

export const setFavIcon = (portal_settings) => {
    const set_fav_icon = document.getElementById("favicon")
    if (!portal_settings?.name) {
        console.log("if")
        set_fav_icon.href = DefaultFavIcon
    }
    else {
        
        const { fav_icon } = portal_settings
        set_fav_icon.href = fav_icon === null ? "https://static.vecteezy.com/system/resources/previews/001/198/020/non_2x/grid-globe-png.png" : fav_icon  
        console.log(set_fav_icon.href)
        console.log(fav_icon)
        console.log("else")
    }
}

export const setTitle = (portal_settings) => {
    if ((!portal_settings?.name)) {
        document.title = "BionicWP"
    } else {
        const { name } = portal_settings
        document.title = name
    }
}

export const setThemeColors = (portal_settings) => {
    if (portal_settings) {
        const root = document.documentElement;
        root.style.setProperty(
            "--main-color",
            `${portal_settings.primary_color}`
        );
        root.style.setProperty(
            "--sub-color",
            `${portal_settings.secondary_color}`
        );
    }
    if (!portal_settings?.primary_color) {
        const root = document.documentElement;
        root.style.setProperty(
            "--main-color",
            `#002544`
        );
        root.style.setProperty(
            "--sub-color",
            `#eb1c2f`
        );
    }
}
export const setLoaderImage = (portal_settings) => {
    const root = document.documentElement;
    if ((!portal_settings?.name)) {
        root.style.setProperty(
            "--loader-image",
            `url(${DefaultLoader})`
        );

    } else {
        root.style.setProperty(
            "--loader-image",
            `url(${AgencyLoader})`
        );
    }
}