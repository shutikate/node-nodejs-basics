const parseEnv = () => {
    const variables = process.env;
    const variablesStartWithRss = Object.entries(variables).filter(([key]) => key.startsWith('RSS_'));
    const result = variablesStartWithRss.map(([key, value]) => `${key}=${value}`).join('; ')
    console.log(result);
};

parseEnv();