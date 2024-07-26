var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PERCENTAVSECLICACT_2 = new ol.format.GeoJSON();
var features_PERCENTAVSECLICACT_2 = format_PERCENTAVSECLICACT_2.readFeatures(json_PERCENTAVSECLICACT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERCENTAVSECLICACT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERCENTAVSECLICACT_2.addFeatures(features_PERCENTAVSECLICACT_2);
var lyr_PERCENTAVSECLICACT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERCENTAVSECLICACT_2, 
                style: style_PERCENTAVSECLICACT_2,
                popuplayertitle: "PERCENT AVSEC LIC ACT",
                interactive: true,
    title: 'PERCENT AVSEC LIC ACT<br />\
    <img src="styles/legend/PERCENTAVSECLICACT_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/PERCENTAVSECLICACT_2_1.png" /> 0 - 22<br />\
    <img src="styles/legend/PERCENTAVSECLICACT_2_2.png" /> 22 - 59<br />\
    <img src="styles/legend/PERCENTAVSECLICACT_2_3.png" /> 59 - 100<br />\
    <img src="styles/legend/PERCENTAVSECLICACT_2_4.png" /> 100 - 100<br />'
        });
var format_PERCENTDSTACT_3 = new ol.format.GeoJSON();
var features_PERCENTDSTACT_3 = format_PERCENTDSTACT_3.readFeatures(json_PERCENTDSTACT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERCENTDSTACT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERCENTDSTACT_3.addFeatures(features_PERCENTDSTACT_3);
var lyr_PERCENTDSTACT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERCENTDSTACT_3, 
                style: style_PERCENTDSTACT_3,
                popuplayertitle: "PERCENT DST ACT",
                interactive: true,
    title: 'PERCENT DST ACT<br />\
    <img src="styles/legend/PERCENTDSTACT_3_0.png" /> 0 - 10,6<br />\
    <img src="styles/legend/PERCENTDSTACT_3_1.png" /> 10,6 - 74,2<br />\
    <img src="styles/legend/PERCENTDSTACT_3_2.png" /> 74,2 - 86,6<br />\
    <img src="styles/legend/PERCENTDSTACT_3_3.png" /> 86,6 - 94,6<br />\
    <img src="styles/legend/PERCENTDSTACT_3_4.png" /> 94,6 - 100<br />'
        });
var format_TOTALPERSONELAVSEC_4 = new ol.format.GeoJSON();
var features_TOTALPERSONELAVSEC_4 = format_TOTALPERSONELAVSEC_4.readFeatures(json_TOTALPERSONELAVSEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOTALPERSONELAVSEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOTALPERSONELAVSEC_4.addFeatures(features_TOTALPERSONELAVSEC_4);
var lyr_TOTALPERSONELAVSEC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOTALPERSONELAVSEC_4, 
                style: style_TOTALPERSONELAVSEC_4,
                popuplayertitle: "TOTAL PERSONEL AVSEC",
                interactive: true,
    title: 'TOTAL PERSONEL AVSEC<br />\
    <img src="styles/legend/TOTALPERSONELAVSEC_4_0.png" /> 0 - 0<br />\
    <img src="styles/legend/TOTALPERSONELAVSEC_4_1.png" /> 0 - 2,4<br />\
    <img src="styles/legend/TOTALPERSONELAVSEC_4_2.png" /> 2,4 - 5<br />\
    <img src="styles/legend/TOTALPERSONELAVSEC_4_3.png" /> 5 - 8<br />\
    <img src="styles/legend/TOTALPERSONELAVSEC_4_4.png" /> 8 - 310<br />'
        });
var format_TOTALPERSONEL_5 = new ol.format.GeoJSON();
var features_TOTALPERSONEL_5 = format_TOTALPERSONEL_5.readFeatures(json_TOTALPERSONEL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOTALPERSONEL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOTALPERSONEL_5.addFeatures(features_TOTALPERSONEL_5);
var lyr_TOTALPERSONEL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOTALPERSONEL_5, 
                style: style_TOTALPERSONEL_5,
                popuplayertitle: "TOTAL PERSONEL",
                interactive: true,
    title: 'TOTAL PERSONEL<br />\
    <img src="styles/legend/TOTALPERSONEL_5_0.png" /> 1 - 42<br />\
    <img src="styles/legend/TOTALPERSONEL_5_1.png" /> 42 - 66<br />\
    <img src="styles/legend/TOTALPERSONEL_5_2.png" /> 66 - 89<br />\
    <img src="styles/legend/TOTALPERSONEL_5_3.png" /> 89 - 153<br />\
    <img src="styles/legend/TOTALPERSONEL_5_4.png" /> 153 - 1809<br />'
        });
var format_STATION_6 = new ol.format.GeoJSON();
var features_STATION_6 = format_STATION_6.readFeatures(json_STATION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATION_6.addFeatures(features_STATION_6);
var lyr_STATION_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STATION_6, 
                style: style_STATION_6,
                popuplayertitle: "STATION",
                interactive: false,
    title: 'STATION<br />\
    <img src="styles/legend/STATION_6_0.png" /> DOMESTIC<br />\
    <img src="styles/legend/STATION_6_1.png" /> INTERNATIONAL<br />'
        });
var group_STATISTIC = new ol.layer.Group({
                                layers: [lyr_PERCENTAVSECLICACT_2,lyr_PERCENTDSTACT_3,lyr_TOTALPERSONELAVSEC_4,lyr_TOTALPERSONEL_5,],
                                fold: "open",
                                title: "STATISTIC"});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,],
                                fold: "open",
                                title: "BASEMAP"});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_PERCENTAVSECLICACT_2.setVisible(false);lyr_PERCENTDSTACT_3.setVisible(false);lyr_TOTALPERSONELAVSEC_4.setVisible(false);lyr_TOTALPERSONEL_5.setVisible(false);lyr_STATION_6.setVisible(true);
var layersList = [group_BASEMAP,group_STATISTIC,lyr_STATION_6];
lyr_PERCENTAVSECLICACT_2.set('fieldAliases', {'NO': 'NO', 'IATA': 'IATA', 'ICAO': 'ICAO', 'UNIT': 'UNIT', 'NAMAKK': 'Nama KK', 'NO_PEG': 'No. Peg', 'EMAIL': 'EMAIL', 'HP': 'HP', 'OFFICE': 'OFFICE', 'FAX': 'FAX', 'JDOM': 'JDOM', 'OBJNAME': 'Airport Name', 'CITYNAME': 'City Name', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'UTC': 'UTC', 'STATUS': 'Area Station', 'CLASBO': 'Class BO', 'MANAGE': 'Management Airport', 'T_PERSONIL': 'Total Personel', 'P_DST_ACT': 'Percent DST Act', 'T_AVSEC': 'Total Personel Avsec', 'P_AVSEC_LI': 'Percent Avsec Lic Act', 'DAST': 'DAST', 'KATEGORI': 'KATEGORI', });
lyr_PERCENTDSTACT_3.set('fieldAliases', {'NO': 'NO', 'IATA': 'IATA', 'ICAO': 'ICAO', 'UNIT': 'UNIT', 'NAMAKK': 'Nama KK', 'NO_PEG': 'No. Peg', 'EMAIL': 'EMAIL', 'HP': 'HP', 'OFFICE': 'OFFICE', 'FAX': 'FAX', 'JDOM': 'JDOM', 'OBJNAME': 'Airport Name', 'CITYNAME': 'City Name', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'UTC': 'UTC', 'STATUS': 'Area Station', 'CLASBO': 'Class BO', 'MANAGE': 'Management Airport', 'T_PERSONIL': 'Total Personel', 'P_DST_ACT': 'Percent DST Act', 'T_AVSEC': 'Total Personel Avsec', 'P_AVSEC_LI': 'Percent Avsec Lic Act', 'DAST': 'DAST', 'KATEGORI': 'KATEGORI', });
lyr_TOTALPERSONELAVSEC_4.set('fieldAliases', {'NO': 'NO', 'IATA': 'IATA', 'ICAO': 'ICAO', 'UNIT': 'UNIT', 'NAMAKK': 'Nama KK', 'NO_PEG': 'No. Peg', 'EMAIL': 'EMAIL', 'HP': 'HP', 'OFFICE': 'OFFICE', 'FAX': 'FAX', 'JDOM': 'JDOM', 'OBJNAME': 'Airport Name', 'CITYNAME': 'City Name', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'UTC': 'UTC', 'STATUS': 'Area Station', 'CLASBO': 'Class BO', 'MANAGE': 'Management Airport', 'T_PERSONIL': 'Total Personel', 'P_DST_ACT': 'Percent DST Act', 'T_AVSEC': 'Total Personel Avsec', 'P_AVSEC_LI': 'Percent Avsec Lic Act', 'DAST': 'DAST', 'KATEGORI': 'KATEGORI', });
lyr_TOTALPERSONEL_5.set('fieldAliases', {'NO': 'NO', 'IATA': 'IATA', 'ICAO': 'ICAO', 'UNIT': 'UNIT', 'NAMAKK': 'Nama KK', 'NO_PEG': 'No. Peg', 'EMAIL': 'EMAIL', 'HP': 'HP', 'OFFICE': 'OFFICE', 'FAX': 'FAX', 'JDOM': 'JDOM', 'OBJNAME': 'Airport Name', 'CITYNAME': 'City Name', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'UTC': 'UTC', 'STATUS': 'Area Station', 'CLASBO': 'Class BO', 'MANAGE': 'Management Airport', 'T_PERSONIL': 'Total Personel', 'P_DST_ACT': 'Percent DST Act', 'T_AVSEC': 'Total Personel Avsec', 'P_AVSEC_LI': 'Percent Avsec Lic Act', 'DAST': 'DAST', 'KATEGORI': 'KATEGORI', });
lyr_STATION_6.set('fieldAliases', {'NO': 'NO', 'IATA': 'IATA', 'ICAO': 'ICAO', 'UNIT': 'UNIT', 'NAMAKK': 'Nama KK', 'NO_PEG': 'No. Peg', 'EMAIL': 'EMAIL', 'HP': 'HP', 'OFFICE': 'OFFICE', 'FAX': 'FAX', 'JDOM': 'JDOM', 'OBJNAME': 'Airport Name', 'CITYNAME': 'City Name', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'UTC': 'UTC', 'STATUS': 'Area Station', 'CLASBO': 'Class BO', 'MANAGE': 'Management Airport', 'T_PERSONIL': 'Total Personel', 'P_DST_ACT': 'Percent DST Act', 'T_AVSEC': 'Total Personel Avsec', 'P_AVSEC_LI': 'Percent Avsec Lic Act', 'DAST': 'DAST', 'KATEGORI': 'KATEGORI', });
lyr_PERCENTAVSECLICACT_2.set('fieldImages', {'NO': 'TextEdit', 'IATA': 'TextEdit', 'ICAO': 'TextEdit', 'UNIT': 'TextEdit', 'NAMAKK': 'TextEdit', 'NO_PEG': 'TextEdit', 'EMAIL': 'TextEdit', 'HP': 'TextEdit', 'OFFICE': 'TextEdit', 'FAX': 'TextEdit', 'JDOM': 'TextEdit', 'OBJNAME': 'TextEdit', 'CITYNAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'UTC': 'TextEdit', 'STATUS': 'TextEdit', 'CLASBO': 'TextEdit', 'MANAGE': 'TextEdit', 'T_PERSONIL': 'TextEdit', 'P_DST_ACT': 'TextEdit', 'T_AVSEC': 'TextEdit', 'P_AVSEC_LI': 'TextEdit', 'DAST': 'TextEdit', 'KATEGORI': 'TextEdit', });
lyr_PERCENTDSTACT_3.set('fieldImages', {'NO': 'TextEdit', 'IATA': 'TextEdit', 'ICAO': 'TextEdit', 'UNIT': 'TextEdit', 'NAMAKK': 'TextEdit', 'NO_PEG': 'TextEdit', 'EMAIL': 'TextEdit', 'HP': 'TextEdit', 'OFFICE': 'TextEdit', 'FAX': 'TextEdit', 'JDOM': 'TextEdit', 'OBJNAME': 'TextEdit', 'CITYNAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'UTC': 'TextEdit', 'STATUS': 'TextEdit', 'CLASBO': 'TextEdit', 'MANAGE': 'TextEdit', 'T_PERSONIL': 'TextEdit', 'P_DST_ACT': 'TextEdit', 'T_AVSEC': 'TextEdit', 'P_AVSEC_LI': 'TextEdit', 'DAST': 'TextEdit', 'KATEGORI': 'TextEdit', });
lyr_TOTALPERSONELAVSEC_4.set('fieldImages', {'NO': 'TextEdit', 'IATA': 'TextEdit', 'ICAO': 'TextEdit', 'UNIT': 'TextEdit', 'NAMAKK': 'TextEdit', 'NO_PEG': 'TextEdit', 'EMAIL': 'TextEdit', 'HP': 'TextEdit', 'OFFICE': 'TextEdit', 'FAX': 'TextEdit', 'JDOM': 'TextEdit', 'OBJNAME': 'TextEdit', 'CITYNAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'UTC': 'TextEdit', 'STATUS': 'TextEdit', 'CLASBO': 'TextEdit', 'MANAGE': 'TextEdit', 'T_PERSONIL': 'TextEdit', 'P_DST_ACT': 'TextEdit', 'T_AVSEC': 'TextEdit', 'P_AVSEC_LI': 'TextEdit', 'DAST': 'TextEdit', 'KATEGORI': 'TextEdit', });
lyr_TOTALPERSONEL_5.set('fieldImages', {'NO': 'TextEdit', 'IATA': 'TextEdit', 'ICAO': 'TextEdit', 'UNIT': 'TextEdit', 'NAMAKK': 'TextEdit', 'NO_PEG': 'TextEdit', 'EMAIL': 'TextEdit', 'HP': 'TextEdit', 'OFFICE': 'TextEdit', 'FAX': 'TextEdit', 'JDOM': 'TextEdit', 'OBJNAME': 'TextEdit', 'CITYNAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'UTC': 'TextEdit', 'STATUS': 'TextEdit', 'CLASBO': 'TextEdit', 'MANAGE': 'TextEdit', 'T_PERSONIL': 'TextEdit', 'P_DST_ACT': 'TextEdit', 'T_AVSEC': 'TextEdit', 'P_AVSEC_LI': 'TextEdit', 'DAST': 'TextEdit', 'KATEGORI': 'TextEdit', });
lyr_STATION_6.set('fieldImages', {'NO': 'TextEdit', 'IATA': 'TextEdit', 'ICAO': 'TextEdit', 'UNIT': 'TextEdit', 'NAMAKK': 'TextEdit', 'NO_PEG': 'TextEdit', 'EMAIL': 'TextEdit', 'HP': 'TextEdit', 'OFFICE': 'TextEdit', 'FAX': 'TextEdit', 'JDOM': 'TextEdit', 'OBJNAME': 'TextEdit', 'CITYNAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'UTC': 'TextEdit', 'STATUS': 'TextEdit', 'CLASBO': 'TextEdit', 'MANAGE': 'TextEdit', 'T_PERSONIL': 'TextEdit', 'P_DST_ACT': 'TextEdit', 'T_AVSEC': 'TextEdit', 'P_AVSEC_LI': 'TextEdit', 'DAST': 'TextEdit', 'KATEGORI': 'TextEdit', });
lyr_PERCENTAVSECLICACT_2.set('fieldLabels', {'NO': 'inline label - always visible', 'IATA': 'inline label - visible with data', 'ICAO': 'inline label - always visible', 'UNIT': 'inline label - visible with data', 'NAMAKK': 'inline label - always visible', 'NO_PEG': 'inline label - always visible', 'EMAIL': 'inline label - always visible', 'HP': 'inline label - always visible', 'OFFICE': 'inline label - always visible', 'FAX': 'inline label - always visible', 'JDOM': 'inline label - always visible', 'OBJNAME': 'inline label - always visible', 'CITYNAME': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'UTC': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'CLASBO': 'inline label - always visible', 'MANAGE': 'inline label - always visible', 'T_PERSONIL': 'inline label - always visible', 'P_DST_ACT': 'inline label - always visible', 'T_AVSEC': 'inline label - always visible', 'P_AVSEC_LI': 'inline label - always visible', 'DAST': 'inline label - always visible', 'KATEGORI': 'no label', });
lyr_PERCENTDSTACT_3.set('fieldLabels', {'NO': 'inline label - always visible', 'IATA': 'inline label - always visible', 'ICAO': 'inline label - always visible', 'UNIT': 'inline label - always visible', 'NAMAKK': 'inline label - always visible', 'NO_PEG': 'inline label - always visible', 'EMAIL': 'inline label - always visible', 'HP': 'inline label - always visible', 'OFFICE': 'inline label - always visible', 'FAX': 'inline label - always visible', 'JDOM': 'inline label - always visible', 'OBJNAME': 'inline label - always visible', 'CITYNAME': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'UTC': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'CLASBO': 'inline label - always visible', 'MANAGE': 'inline label - always visible', 'T_PERSONIL': 'inline label - always visible', 'P_DST_ACT': 'inline label - always visible', 'T_AVSEC': 'inline label - always visible', 'P_AVSEC_LI': 'inline label - always visible', 'DAST': 'inline label - always visible', 'KATEGORI': 'no label', });
lyr_TOTALPERSONELAVSEC_4.set('fieldLabels', {'NO': 'inline label - always visible', 'IATA': 'inline label - always visible', 'ICAO': 'inline label - always visible', 'UNIT': 'inline label - always visible', 'NAMAKK': 'inline label - always visible', 'NO_PEG': 'inline label - always visible', 'EMAIL': 'inline label - always visible', 'HP': 'inline label - always visible', 'OFFICE': 'inline label - always visible', 'FAX': 'inline label - always visible', 'JDOM': 'inline label - always visible', 'OBJNAME': 'inline label - always visible', 'CITYNAME': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'UTC': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'CLASBO': 'inline label - always visible', 'MANAGE': 'inline label - always visible', 'T_PERSONIL': 'inline label - always visible', 'P_DST_ACT': 'inline label - always visible', 'T_AVSEC': 'inline label - always visible', 'P_AVSEC_LI': 'inline label - always visible', 'DAST': 'inline label - always visible', 'KATEGORI': 'no label', });
lyr_TOTALPERSONEL_5.set('fieldLabels', {'NO': 'inline label - always visible', 'IATA': 'inline label - always visible', 'ICAO': 'inline label - always visible', 'UNIT': 'inline label - always visible', 'NAMAKK': 'inline label - always visible', 'NO_PEG': 'inline label - always visible', 'EMAIL': 'inline label - always visible', 'HP': 'inline label - always visible', 'OFFICE': 'inline label - always visible', 'FAX': 'inline label - always visible', 'JDOM': 'inline label - always visible', 'OBJNAME': 'inline label - always visible', 'CITYNAME': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'UTC': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'CLASBO': 'inline label - always visible', 'MANAGE': 'inline label - always visible', 'T_PERSONIL': 'inline label - always visible', 'P_DST_ACT': 'inline label - always visible', 'T_AVSEC': 'inline label - always visible', 'P_AVSEC_LI': 'inline label - always visible', 'DAST': 'inline label - always visible', 'KATEGORI': 'no label', });
lyr_STATION_6.set('fieldLabels', {'NO': 'inline label - always visible', 'IATA': 'inline label - always visible', 'ICAO': 'inline label - always visible', 'UNIT': 'inline label - always visible', 'NAMAKK': 'inline label - always visible', 'NO_PEG': 'inline label - always visible', 'EMAIL': 'inline label - always visible', 'HP': 'inline label - always visible', 'OFFICE': 'inline label - always visible', 'FAX': 'inline label - always visible', 'JDOM': 'inline label - always visible', 'OBJNAME': 'inline label - always visible', 'CITYNAME': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'UTC': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'CLASBO': 'inline label - always visible', 'MANAGE': 'inline label - always visible', 'T_PERSONIL': 'inline label - always visible', 'P_DST_ACT': 'inline label - always visible', 'T_AVSEC': 'inline label - always visible', 'P_AVSEC_LI': 'inline label - always visible', 'DAST': 'inline label - always visible', 'KATEGORI': 'no label', });
lyr_STATION_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});