interface Config {
    application_id: string;
    application_secret: string;
    public_key: string;
}

const CONFIG: Config = {
    application_id: '988999880473182258',
    application_secret: APPLICATION_SECRET, // stored as a secret
    // eslint-disable-next-line max-len
    public_key: '9aed56326c3a860a5baab2d39fc4a5ada741794e668a5e31febf333b220068d6'
};

export default CONFIG;
