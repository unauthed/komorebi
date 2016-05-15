import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://private-47d06-komorebi.apiary-mock.com'
    // namespace: 'api/v1'
});

export default ApplicationAdapter;
