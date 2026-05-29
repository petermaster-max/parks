ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([31.896319, -13.210706, 34.044666, -12.388686]);
var wms_layers = [];

var format_kasungu_0 = new ol.format.GeoJSON();
var features_kasungu_0 = format_kasungu_0.readFeatures(json_kasungu_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kasungu_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kasungu_0.addFeatures(features_kasungu_0);
var lyr_kasungu_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kasungu_0, 
                style: style_kasungu_0,
                popuplayertitle: 'kasungu',
                interactive: true,
                title: '<img src="styles/legend/kasungu_0.png" /> kasungu'
            });
var format_parks_1 = new ol.format.GeoJSON();
var features_parks_1 = format_parks_1.readFeatures(json_parks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_parks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parks_1.addFeatures(features_parks_1);
var lyr_parks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parks_1, 
                style: style_parks_1,
                popuplayertitle: 'parks',
                interactive: true,
                title: '<img src="styles/legend/parks_1.png" /> parks'
            });

lyr_kasungu_0.setVisible(true);lyr_parks_1.setVisible(true);
var layersList = [lyr_kasungu_0,lyr_parks_1];
lyr_kasungu_0.set('fieldAliases', {'id': 'id', 'hdk': 'hdk', });
lyr_parks_1.set('fieldAliases', {'id': 'id', 'jfh': 'jfh', });
lyr_kasungu_0.set('fieldImages', {'id': '', 'hdk': '', });
lyr_parks_1.set('fieldImages', {'id': '', 'jfh': '', });
lyr_kasungu_0.set('fieldLabels', {'id': 'no label', 'hdk': 'no label', });
lyr_parks_1.set('fieldLabels', {'id': 'no label', 'jfh': 'no label', });
lyr_parks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});