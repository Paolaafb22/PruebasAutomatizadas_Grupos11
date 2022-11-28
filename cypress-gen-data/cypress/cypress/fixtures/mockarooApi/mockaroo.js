const Mockaroo = require('mockaroo');

class MockarooData {

    #mockarooClient;
    #generate;
    #schema;
    
    constructor(generate, schema) {
        this.#generate = generate;
        this.#schema = schema;
        this.#mockarooClient = new Mockaroo.Client({
            apiKey: this.#schema.key
        });
    }

    async generarDataPool() {
        return this.#mockarooClient.generate({
            count: this.#generate,
            schema: this.#schema.name
        }).then(data => { return data; });
    }
}

const SCHEMAS = {
    page_Negative: {key: '2fe3c430', name: 'page_Negative'},
    pages_positive: {key: '2fe3c430', name: 'pages_positive'}    
};

export{MockarooData, SCHEMAS};