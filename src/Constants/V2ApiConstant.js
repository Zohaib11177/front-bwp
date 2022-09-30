const V2 = {
    login: "v2/auth/user-login/",
    register: "v2/auth/register-customer/",
    reset_password: "v2/auth/create-new-password",
    sites: "v2/sites",
    regions: "v2/regions",
    site_operation: {
        quick_login: "v2/site/one-click-login/",
        site_delete: "v2/sites/",
        restart_php: "v2/sites/restart-php/",
        restart_nginx: "v2/sites/restart-nginx/",
    },
    migration: "v2/site/migrate",
    settings: {
        nerd_mode: "v2/user/nerd-mode",
    },
    dashboard: "v2/dashboard/",
    billing: {
        card: "v2/payment/card",
    },
    ssl: {
        enable: "v2/sites/ssl/",
        revoke: "v2/sites/ssl/",
        renew: "v2/sites/ssl/renew/",
    },
    domain: {
        list: "v2/domains/",
        add: "v2/domains/",
        delete: "v2/domains/",
        search: "v2/domains/search",
    },
    wordpress: {
        update_all: "v2/wordpress/content",
    },
    site_detail: {
        generate_sftp: "v2/sites/generate-sftp/",
    },
    cdn: "v2/sites/cdn/",
    backup: {
        backup: "v2/backups/",
        download: "v2/backups/download/",
    },
    profiles: "v2/profiles",
    verification: "v2/auth/verification/",
    site: {
        costing: "v2/sites/costing/",
    },
    access_sharing: "v2/sites/access-sharing/",
};

export default V2;
