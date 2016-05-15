import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://private-dd544-wabi.apiary-mock.com'
    // namespace: 'api/v1'
});

export default ApplicationAdapter;
