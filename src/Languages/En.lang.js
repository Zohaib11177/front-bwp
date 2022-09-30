const Messages = {
    dashboard: {
        account: {
            text: "One of the best ways to influence people is to make those around you feel important.",
        },
    },
    site_dashboard: {
        staging: {
            text: "This site doesn't have a staging environment Create one?",
        },
        staging_inprogress: {
            text: "Your staging site is being launched...",
        },
    },
    site_backups: {
        daily_backup: {
            text: "Our systems take a daily backup of your site to ensure you have an easy route to restore your website in case of any issues, clicking on restore will overwrite any existing data and restore your website back to the state it was on the indicated date. Apart of system generated daily backups, you can also take on demand backups by clicking on Create Backup button.",
        },
        clone: {
            text: "Cloning between different DB engine may break your site. We recommend to use same DB for cloning.",
            cloneBlockText: "Cloning between cross platforms is restricted",
        },
    },
    site_operations: {
        restart_php: {
            text: "Made any PHP changes? Encountering any PHP errors? Click here to safely restart PHP on your container.",
        },
        restart_nginx: {
            text: "Click here to restart NGINX on your container.",
        },
        reset_permission: {
            text: "Click here to Reset Permissions on your HTML folder to fix any permission errors.",
        },
        clear_cache: {
            text: "Changes not visible? Click here to quickly purge the cache on your container.",
        },
        site_env: {
            text: "Choose which environment you want to push changesto. Push to staging if you want to sync your staging site with your live site. Push to live if you want to sync your live site with your staging site. All data gets overwritten. If in doubt, contact support.",
        },
        site_delete: {
            text: " Click here to Delete Your Site. Please note this operation is irreversible and all data would be deleted immediately.",
        },
        push_to_live_env: {
            text: "Choose which environment you want to push changesto. Push to staging if you want to sync your staging site with your live site. Push to live if you want to sync your live site with your staging site. All data gets overwritten. If in doubt, contact support.",
        },
    },
    site_addons: {
        bionic_speed: {
            text: "Activate Bionic Speed powered by NitroPack and managed by BionicWP to achieve the highest caching performance and 90+ Scores in GTMetrix and Google Pagespeed Insights.",
        },
        bionic_cdn: {
            text: "Speed up your site and save up on resources by using CDN already included in your plan.",
        },
    },
};

export default Messages;
