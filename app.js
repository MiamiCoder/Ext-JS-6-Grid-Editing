Ext.application({
    name: 'App',
    extend: 'Ext.app.Application',
    models: ['ModelCar', 'Vendor'],
    stores: ['ModelCars', 'Vendors'],
    views: ['MainContainer', 'MainContainerController'],
    mainView: 'App.view.MainContainer'
});
