interface Config {
    application_id: string;
    application_secret: string;
    public_key: string;
    db_url: string;
    db_key: string;
}

const CONFIG: Config = {
    // the following are stored as secrets via wrangler CLI
    application_id: APPLICATION_ID,
    application_secret: APPLICATION_SECRET,
    public_key: PUBLIC_KEY,
    db_url: DB_URL,
    db_key: DB_KEY
}

export default CONFIG
